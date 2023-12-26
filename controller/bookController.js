const slugify = require('slugify')
// const jwt = require('../utils/jwt')
const fs = require('fs')
const Book = require('../model/productModel')

const bookController ={
    async createBook(req,res){
        try {
            const {name, description} = req.fields;
            const {photo} = req.files;
            switch(true){
                case !name:
                    return res.status(500).send({error:"name feild is required"})
                    case !description:
                    return res.status(500).send({error:"description feild is required"})
                    case !photo && photo.size >1000000:
                    return res.status(500).send({error:"photo feild is required and should be less than 1mb"})
            }

            const book = new Book({...req.fields, slug:slugify(name)})
            if(photo){
                book.photo.data = fs.readFileSync(photo.path)
                book.photo.contentType = photo.type   ; 
            }
            await book.save()
            await book.save()
                    res.status(200).send({
                        success:true,
                        message:"book addded succesfully",
                        book
                    })
        } catch (error) {
            console.log(error)
            return res.status(400).send({
                success:false,
                message: "error in creating book",
                error:error.message
            })
        }
    },
    async getBook(req,res){
        try{
            const book = await Book.find({}).select("-photo").limit(12).sort({createdAt:-1})
            res.status(200).send({
                success:true,
                message:"all books",
                book,
                countTotal:book.length,
            })
        }
        catch(error){
            console.log(error)
            return res.status(400).send({
                success:false,
                message: "error in getting books",
                error:error.message
            })
        }
    },
    async getPhoto(req,res){
        try{
            const book = await Book.findById(req.params.bid).select("photo")
            if(book && book.photo && book.photo.data){
                res.set("Content-type", book.photo.contentType);
                return res.status(200).send(book.photo.data);
            }
        }
        catch(error){
            console.log(error)
            return res.status(400).send({
                success:false,
                message: "error in getting photos",
                error:error.message
            })
        }
    }
}

module.exports= bookController;