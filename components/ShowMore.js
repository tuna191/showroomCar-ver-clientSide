"use client"

// import { useRouter } from "next/navigation"
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({pageNumber,isNext,setLimit}) => {
    // const router = useRouter();

    const handleNavigation = () =>{
        const newLimit = (pageNumber + 1)*10;
        // const newPathName = updateSearchParams("limit",`${newLimit}`);
        // router.push(newPathName);

        setLimit(newLimit);
    }
  return (
    <div className="w-full flex-center mt-10 gap-5">

        {
            !isNext && (
                <CustomButton
                    title='Show More'
                    btnType="button"
                    containerStyle='bg-primary-blue rounded-full text-white '
                    handleClick={handleNavigation}
                />
            )
        }
    </div>
  )
}

export default ShowMore