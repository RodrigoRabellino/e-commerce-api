const { Product } = require("../db/models/product");
const slugify = require("slugify");

// Display a listing of the resource when show is true.
const index = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const products = await Product.find({ show: true })
      .sort({ createdAt: "desc" })
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();
    console.log("user pego");
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
};
// Display a listing of the resource for admins.
const indexAll = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("categoryId")
      .sort({ createdAt: "desc" });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
};

//Display a listing of the resource filtered by category
const indexCategory = async (req, res) => {
  console.log(req.params);
  try {
    const products = await Product.find({
      categoryId: req.params.id,
      show: true,
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
};

const indexStarred = async (req, res) => {
  try {
    const starredProducts = await Product.find({ starred: true });
    res.status(200).json(starredProducts);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Display the specified resource.
const show = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};

const showBySlug = async (req, res) => {
  const { slug } = req.params;
  console.log("slug", slug);
  try {
    const product = await Product.findOne({ slug: slug });
    if (!product) return res.status(404).json("product not found");
    res.status(200).json(product);
  } catch (error) {
    res.status(401).json(error);
  }
};

// Store a newly created resource in storage.
const store = async (req, res) => {
  const { name, description, imgUrl, price, stock, categoryId, createdBy } =
    req.body;
  const slug = slugName(name);
  try {
    const product = await Product.create({
      name,
      description,
      imgUrl,
      price,
      stock,
      categoryId,
      createdBy,
      starred: false,
      show: true,
      slug,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Update the specified resource in storage.
const update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  data.slug = slugName(data.name);
  try {
    const product = await Product.findByIdAndUpdate(id, data, { new: true });
    console.log(product);
    res.status(201).json(product);
  } catch (error) {
    console.log("soy el error --.>>", error);
    res.status(400).json(error);
  }
};

// Remove the specified resource from storage.
const destroy = async (req, res) => {};

// change "show" attribute in specified resource from storage.
const updateShow = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    product.show = !product.show;
    product.save();
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
// change "starred" attribute in specified resource from storage.
const updateStarred = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    product.starred = !product.starred;
    product.save();
    console.log(product.starred);
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const slugName = (productName) => {
  console.log(productName);
  const slugString = slugify(productName, {
    replacement: "_",
    lower: true,
  });
  return slugString;
};

module.exports = {
  index,
  indexAll,
  indexCategory,
  indexStarred,
  show,
  store,
  update,
  updateShow,
  updateStarred,
  destroy,
  showBySlug,
};
