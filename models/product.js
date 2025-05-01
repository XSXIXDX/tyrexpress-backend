const mongoose =  require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    description:{
        type: String,
        required: true,
    },
    richDescription:{
        type: String,
        default: '',
    },
    image:{        
        type: String,
        default: '',
    },
    brand: {
        type: String,
        default: '',
    },
    
    price:{
        type: Number,
        default:0,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'Category'
    },
    
    countInStock:{
        type: Number,
        required: true,
        min: 0,
        max: 250,
        
    },
    
    rating:{
        type: Number,
        default: 0,
    },
    isFeatured:{
        type: Boolean,
        default: false,
    },
    dateCreated:{
        type: Date,
        default: Date.now,
    },
    numReviews:{
        type: Number,
        default:0
    },
    

})

exports.Product = mongoose.model('Product', productSchema);