/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useSurahId } from "../../../../hooks/useSurahId";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Links = ({ chapterNum, setChapterNum }) => {

    const surahId = useSurahId()
    const navigate = useNavigate()

    const handlePrevClick = () => {
        navigate(`/surah/${surahId - 1}`)
        setChapterNum(chapterNum - 1)
    }

    const handleNextClick = () => {
        navigate(`/surah/${surahId + 1}`)
        setChapterNum(chapterNum + 1)
    }

    return (
        <div className="flex items-center justify-between w-full">
            {
                surahId !== 1 && <div onClick={handlePrevClick} className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 cursor-pointer">
                    <FaAngleLeft></FaAngleLeft>
                    <p>prev</p>
                </div>
            }

            {
                surahId !== 114 && <div onClick={handleNextClick} className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 cursor-pointer">
                    <p>next</p>
                    <FaAngleRight></FaAngleRight>
                </div>
            }

        </div>
    );
};

export default Links;