const Category = require("../models/Category");
const Hotel = require("../models/Hotel");

const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find({});
    return res.status(200).send(hotels);
  } catch (error) {
    return res.status(500).send("Internal Server Error: " + error);
  }
};
const getSingleHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await Hotel.findById(id);
    if (!hotel) {
      return res
        .status(404)
        .send(`The hotel with the id ${id} does not exist.`);
    }
    return res.status(200).send(hotel);
  } catch (error) {
    return res.status(500).send("Internal Server Error: " + error);
  }
};
const createHotel = async (req, res) => {
  try {
    const { name, address, phoneNumber, city, state, country,price, categoryId } = req.body;
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).send("Category Not Found");
    }
    const newHotel = new Hotel({
      name,
      address,
      phoneNumber ,
      city,
      state,
      country,
      price,
      categoryId
    });
    await newHotel.save();
    
    category.hotels.push(newHotel.id)
    await category.save()

    return res.status(201).send(newHotel);
  } catch (error) {
    return res.status(500).send("Internal Server Error: " + error);
  }
};

const updateHotel = async(req, res) => {
  try {
    const { id } = req.params;
    const { name, address, phoneNumber, city, state, country } = req.body;
    let hotel =await Hotel.findByIdAndUpdate(id, {
      name,
      address,
      phoneNumber,
      city,
      state,
      country,
    });
    if (!hotel) {
      return res.status(404).json({ error: "Hotel not found" });
    }
    return res.status(200).send({ message: "Updated Successfully!" , hotel});
  } catch (error) {
    return res.status(500).send({ error: `Interval Server error: ${error}` });
  }
};
const deleteHotel =async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await Hotel.findByIdAndDelete(id);

    if (!hotel) {
      return res.status(404).json({ error: "Hotel not found" });
    }
   
    const categories = await Category.find({ hotels: id });

    for (const category of categories) {
      category.hotels = category.hotels.filter(
        (hotelId) => hotelId.toString() !== id
      );
      await category.save(); 
    }
    return res.status(200).send({ message: "Deleted Successfully" });
  } catch (error) {
    return res.status(500).send({error:`Interval Server error: ${error}`});
  }
};
module.exports = {
  getAllHotels,
  getSingleHotel,
  createHotel,
  updateHotel,
  deleteHotel,
};
