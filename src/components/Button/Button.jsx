import { FaPlus } from "react-icons/fa6";

const Button = ({ text, onClick }) => {
    return (
        <>
            <button onClick={onClick} className="flex justify-center items-center gap-3 normal-case border-none rounded-2xl bg-[#304FFD] hover:bg-[#000000] text-white font-normal cta-btn">
                <FaPlus></FaPlus> <span>{text}</span>
            </button>
        </>
    );
};

export default Button;