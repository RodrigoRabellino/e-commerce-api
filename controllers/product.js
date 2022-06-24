const { Product } = require("../db/models/product");
const slugify = require("slugify");

// Display a listing of the resource.
const index = async (req, res) => {
  try {
    const products = await Product.find()
      .gt("stock", 0)
      .sort({ createdAt: "desc" })
      .limit(20);
    console.log("pego con tuti");
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
  console.log(id);
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
      slug,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Update the specified resource in storage.
const update = async (req, res) => {};

// Remove the specified resource from storage.
const destroy = async (req, res) => {};

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
  indexStarred,
  show,
  store,
  update,
  destroy,
  showBySlug,
};
