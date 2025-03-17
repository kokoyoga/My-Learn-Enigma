import { Input, Button } from "@heroui/react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { toast } from "sonner";

function WishList() {
  // const inputRef = useRef();
  const [wishListInput, setWishListInput] = useState("");
  const [wishListItems, setWishListItems] = useState([]);

  // mengirim data ke server dengan mentriger button add dengan post
  const AddWishList = async () => {
    try {
      await axiosInstance.post("/wishlist-items", {
        name: wishListInput,
      });
      fetchWishListItem();
      setWishListInput("");
      toast.success("You added a new item");
    } catch (error) {
      toast.error("Server Error, Please wait a moment");
    }
    // const wishListValue = inputRef.current.value;
    // setWishListItems([...wishListItems, wishListInput]);
    // setWishListInput("");
  };

  // ngambil data ke server
  const fetchWishListItem = async () => {
    try {
      const response = await axiosInstance.get("/wishlist-items");
      setWishListItems(response.data);
    } catch (error) {
      toast.error("Server Error, Please wait a moment");
    }
  };

  // agar fetchWishListItem ter trigger secara otomatis masukan ke dalam useEffect
  useEffect(() => {
    fetchWishListItem();
  }, []);

  const deleteWishlist = async (id) => {
    try {
      await axiosInstance.delete(`/wishlist-items/${id}`);
      fetchWishListItem(); // Refresh daftar wishlist setelah menghapus
      toast.success("Item deleted successfully");
    } catch (error) {
      toast.error("Failed to delete item");
    }
  };

  return (
    <>
      <div className="flex">
        <Input
          value={wishListInput}
          onChange={(event) => {
            setWishListInput(event.target.value);
          }}
        ></Input>
        <Button onPress={AddWishList}>Add</Button>
      </div>
      <ul className="text-center list-inside list-decimal">
        {wishListItems.map((item) => {
          return (
            <>
              <div className="flex items-center justify-center gap-5 text-center">
                <li>{item.name}</li>
                <Button onPress={() => deleteWishlist(item.id)}>delete</Button>
              </div>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default WishList;
