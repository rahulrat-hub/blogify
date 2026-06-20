import bcrypt from "bcrypt";
import register from "../Models/registerModel.js";
import {v2 as cloudinary} from 'cloudinary'
import blog from '../Models/blogModel.js'

export let Registerpost = async (req, res) => {
  try {
    let { username, name, password } = req.body;
    console.log(req.body);

    // {Salt generate}
    const salt = await bcrypt.genSalt(10);
    // {password hash}
    const hash = await bcrypt.hash(password, salt);

    // {User created in DB}
    const createduser = await register.create({
      username,
      name,
      password: hash,
    });

    res.json({
      success: true,
      msg: "User Created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Server Error",
      error: error.message,
    });
  }
};

export let Loginpost = async (req, res) => {
  try {
    let { username, password } = req.body;
    console.log(req.body);

    let user = await register.findOne({ username });

    if (!user) {
      return res.json({
        success: false,
        msg: "username not found",
      });

      let matchpass = await bcrypt.compare(password, user.password);
      if (!matchpass) {
        return res.json({
          success: false,
          msg: "Invalid Password",
        });
      } else {
        res.json({
          success: false,
          msg: "Login Successfully",
        });
      }
      const token = jwt.sign({ id: user._id }, "secretkey12");
      console.log(token);
      res.json({
        success: true,
        msg: "token created",
        token,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "server error",
      error: error.message,
    });
  }
};

export let blogpost = async (req, res) => {
  try {
    let { title, description } = req.body;
    console.log(req.body);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        msg: "Image is required",
      });
    }

    let imageurl = await cloudinary.uploader.upload(req.file.path);
    console.log(imageurl)
    console.log(imageurl.secure_url)

    let blogstructure = await blog.create({
      image: imageurl.secure_url,
      title,
      description,
    });

    res.status(201).json({
      success: true,
      msg: "blog created successfully",
      blogstructure,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "Server Error",
      error: error.message,
    });
  }
};

export let blogget = async (req,res)=>{
 
  let bloginfo = await blog.find();

  if(bloginfo.length > 0){
    res.json({
      success : true,
      msg : "Data is Coming",
      bloginfo
    });
  }else{
    res.status(404).json({
      success : false,
      msg : "Data is not found"
    });
  }
}

// {CURD}

export let Read = async (req,res)=>{
  const readblog = await blog.findById(req.params.id);
  res.json(readblog)
}

export let Edit = async (req,res)=>{
  const editblog = await blog.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new : true}
  );
  res.json({
    success : true,
    msg : "Blog Updated",
    editblog
  })
}

export let Delete = async (req,res)=>{
  try{
    await blog.findByIdAndDelete(req.params.id);
    res.json({
      succes : true,
      msg : "Blog deleted successfully",
    })
  } catch (error){
    res.status(500).json({
      error : error.message
    })
  }
}