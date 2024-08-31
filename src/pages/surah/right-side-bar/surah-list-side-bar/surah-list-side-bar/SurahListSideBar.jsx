
import ErrorComponent from "../../../../../components/error-component/ErrorComponent";
import { SurahSkeletonSmall } from "../surah-skeleton-small/SurahSkeletonSmall";
import SurahLinkSmall from "../surah-link-small/SurahLinkSmall";
import { useSurahList } from "../../../../../hooks/useSurahList";

// eslint-disable-next-line react/prop-types
const SurahListSideBar = () => {

    const { surahList, loading, error } = useSurahList();

    return (
        <div className="">
            <h1 className="text-lg font-semibold text-gray-600 mb-4">Chapters</h1>

            {
                loading &&
                <div className="grid grid-cols-1 gap-4">
                    {
                        Array.from({ length: 114 }).map((_, index) => <SurahSkeletonSmall key={index}></SurahSkeletonSmall>)
                    }
                </div>
            }

            {
                // eslint-disable-next-line react/prop-types
                surahList.length > 0 &&
                <div className="grid grid-cols-1 gap-1">
                    {
                        // eslint-disable-next-line react/prop-types
                        surahList.map((surah, index) => <SurahLinkSmall key={index} surah={surah}></SurahLinkSmall>)
                    }
                </div>
            }

            {
                error &&
                <div className="flex justify-center mt-4">
                    <ErrorComponent errorType='Fetching Failed' errorText={error}></ErrorComponent>
                </div>
            }
        </div>
    );
};

export default SurahListSideBar;