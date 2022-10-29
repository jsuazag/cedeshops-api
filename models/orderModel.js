const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    shipping_address: String,
    notes: String,
    cart_id: {
      type: Schema.types.ObjectId,
      ref: "carts",
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("orders", OrderSchema);

module.exports = Order;
