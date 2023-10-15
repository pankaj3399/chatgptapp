import { Button } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import img1 from "../../../assets/ai logos/image1.png";
import img2 from "../../../assets/ai logos/image2.png";
import img3 from "../../../assets/ai logos/image3.png";
import img4 from "../../../assets/ai logos/image4.png";

import { AiOutlineDown } from "@react-icons/all-files/ai/AiOutlineDown";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { AiOutlineQuestionCircle } from "@react-icons/all-files/ai/AiOutlineQuestionCircle";
import { ImCross } from "@react-icons/all-files/im/ImCross";
import { Link, useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "../../../redux-rtk/features/category/categoryApi";
import { useEffect, useState } from "react";
import { cx } from "../../../hooks/helpers";
import LoadingIcon from "../../Shared/LoadingIcon/LoadingIcon";
import { useGetCardTempsQuery } from "../../../redux-rtk/features/cardTemp/cardTempApi";
import { useCreatePromptMutation } from "../../../redux-rtk/features/prompt/promptApi";
import { useUpdatePromptMutation } from "../../../redux-rtk/features/prompt/promptApi";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const menuItems = [
  { name: "GPT-4", imgSrc: img1, disabled: false },
  { name: "UnternehmensGPT", imgSrc: img2, disabled: true },
  { name: "Llama 2", imgSrc: img3, disabled: true },
  { name: "DALL-e 2", imgSrc: img4, disabled: true },
];

const CreatePrompts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let name, prompt, description, category, imgs, mdl,subCat;

  if (location.state) {
    name = location.state.name;
    prompt = location.state.prompt;
    description = location.state.description;
    category = location.state.category.name;
    imgs = location.state.image._id;
    mdl = location.state.model
    subCat=location.state.subCategory._id;
  }
  if (!location.state) {
    name = "";
    prompt = "";
    description = "";
    category = "";
    imgs = "";
    mdl=""
  }
  // get from rtk
  const { data: categories, isLoading, isError } = useGetCategoriesQuery();
  const {
    data: tempCards,
    isLoading: cardTempLoading,
    isError: cardTempError,
  } = useGetCardTempsQuery();
  const [createPrompt, { isLoading: promptLoading, isSuccess }] =
    useCreatePromptMutation();
  const [updatePrompt, { isSuccess:isSuccessUpd }] =
    useUpdatePromptMutation();

  // states
  const [activeCategory, setActiveCategory] = useState();
  const [subCategories, setSubCategories] = useState([]);
  const [subCategory, setSubCategory] = useState("");
  const [image, setImage] = useState("");
  const [model, setModel] = useState(mdl);
  const [input, setInput] = useState({
    name: name,
    prompt: prompt,
    description: description,
    type: "prompt",
  });

  // set on render
  useEffect(() => {
    if (categories?.data.length) {
      if (location.state) {
        const foundCategory = categories.data.find(
          (cat) => cat.name === category
        );
        setActiveCategory(foundCategory._id);
        setSubCategory(subCat);

        setSubCategories(foundCategory.subCategories);
        setImage(imgs);
      }
      else{
          setActiveCategory(categories?.data[0]._id);
          setSubCategories(categories?.data[0]?.subCategories);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories?.data]);

  // clearing states
  useEffect(() => {
    if (isSuccess || isSuccessUpd) {
      setInput({ name: "", prompt: "", description: "", type: "prompt" });
      setModel("");
      setImage("");
      setActiveCategory("");
      setSubCategory("");
  
      // navigate to
      navigate("/library");
    }
  }, [isSuccess, isSuccessUpd, navigate]);
  

  // change category with sub cate
  const handleChangeCategory = (catId) => {
    setActiveCategory(catId);
    setSubCategories(
      categories?.data.find((item) => item._id === catId)?.subCategories
    );
  };

  // handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const setData = {
      ...input,
      category: activeCategory,
      subCategory: subCategory,
      image,
      model
    };
    if(location.state){
        setData.id=location.state._id
    }

    if (
      !setData.name ||
      !setData.prompt ||
      !setData.description ||
      !image ||
      !model ||
      !activeCategory ||
      !subCategory
    ) {
      toast.error("All fields are required!");
      return;
    }
    if(!location.state){
      createPrompt(setData);
    }
    else if(location.state){
      updatePrompt(setData)
    }
  };

  if (isError || cardTempError) return <>Error...</>;
  if (isLoading || cardTempLoading) return <>Loading...</>;

  return (
    <div className="bg-[#303030] mt-4 p-10 text-white">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-3 text-2xl font-extrabold mb-7">
          <AiOutlinePlus></AiOutlinePlus>Prompt hinzufügen
        </p>
        <Link to={"/library"}>
          <p className="cursor-pointer flex items-center gap-4 bg-white text-black py-2 px-4 rounded-md">
            <span className="text-md font-bold">Abbrechen</span>
            <ImCross></ImCross>
          </p>
        </Link>
      </div>
      <div className="mb-10">
        <p className="mb-1">Name</p>
        <div className="w-3/5 text-white bg-white py-2 px-2 border-0 mb-7 rounded-md">
          <input
            className="w-full outline-none text-black "
            type="text"
            placeholder={`Wie nennt sich der Prompt?`}
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
        </div>
      </div>

      <div className="flex w-3/5 justify-between items-center mb-8">
        <p className="">Welches Model soll verwendet werden? </p>
        <Menu>
          <MenuHandler>
            <Button className="bg-[#E6E6E6] text-black w-68 text-[15px] flex items-center gap-3 px-9 rounded-none">
              <img className="w-[23px] h-[23px]" src={img1} alt="" />
              {model || "Model"}
              <AiOutlineDown></AiOutlineDown>
            </Button>
          </MenuHandler>
          <MenuList className="bg-[#B8B8B8] p-0 rounded-none">
            {menuItems.map((menuItem) => (
              <MenuItem
                key={menuItem.name}
                className={cx(
                  "text-black p-3 flex items-center gap-3 text-[15px] rounded-none hover:bg-[#64748B]",
                  menuItem.name === model ? "!bg-[#64748B]" : "bg-[#E6E6E6]"
                )}
                disabled={menuItem.disabled}
                onClick={() => setModel(menuItem.name)}
              >
                <img
                  className="w-[23px] h-[23px]"
                  src={menuItem.imgSrc}
                  alt=""
                />
                {menuItem.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>

      <div className="mb-10 w-3/5">
        <div className="flex items-center justify-between">
          <p className="mb-1">Prompt</p>
          <p className="flex items-center gap-2">
            Was macht einen guten Prompt aus
            <AiOutlineQuestionCircle className="text-xl"></AiOutlineQuestionCircle>
          </p>
        </div>
        <div className="text-white bg-white py-2 px-2 border-0 mb-7 rounded-md">
          <textarea
            className="w-full outline-none text-black resize-none"
            rows={7}
            placeholder={`Prompt hier eingeben.`}
            value={input.prompt}
            onChange={(e) => setInput({ ...input, prompt: e.target.value })}
          />
        </div>
      </div>
      <div className="mb-10">
        <p className="mb-1">Beschreibung</p>
        <div className="w-3/5 text-white bg-white py-2 px-2 border-0 mb-7 rounded-md">
          <textarea
            className="w-full outline-none text-black "
            rows={7}
            placeholder={`Beschreibung des Prompts. Welche Aufgabe wird erledigt? Welche Ziele werden erreicht?`}
            value={input.description}
            onChange={(e) =>
              setInput({ ...input, description: e.target.value })
            }
          />
        </div>
      </div>
      <div className="mb-5">
        <p className="mb-2 ">Kategorie</p>
        <div className="">
          {categories?.data.map((item) => (
            <button
              className={cx(
                "bg-white text-black py-1 px-4 rounded-md text-[14px] me-2 hover:bg-[#E6E6E6]",
                item._id === activeCategory ? "!bg-gray-400" : ""
              )}
              key={item._id}
              onClick={() => handleChangeCategory(item._id)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 ">Use Case</p>
        <div className="">
          {!activeCategory ? (
            <div className="ml-2">Select a category to show use case</div>
          ) : (
            subCategories.map((item) => (
              <button
                key={item._id}
                className={cx(
                  "bg-white text-black py-1 px-4 rounded-md text-[14px] me-2 hover:bg-[#E6E6E6]",
                  item._id === subCategory ? "!bg-gray-400" : ""
                )}
                onClick={() => setSubCategory(item._id)}
              >
                {item.name}
              </button>
            ))
          )}
        </div>
      </div>
      <div className="my-6">
        <p className="mb-2 ">Bild auswählen</p>
        <div className="flex gap-3">
          {tempCards?.data.map((item) => (
            <button key={item._id} onClick={() => setImage(item._id)}>
              <img
                src={item.url}
                alt=""
                className={cx(image !== item._id ? "opacity-50 blur-sm" : "")}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <button
          className="bg-white py-2 px-6 rounded-md text-black flex items-center gap-3 "
          onClick={handleSubmit}
        >
          {promptLoading ? (
            <LoadingIcon color="text-black" />
          ) : (
            <AiOutlinePlus />
          )}
          Prompt hinzufügen
        </button>
      </div>
    </div>
  );
};

export default CreatePrompts;
