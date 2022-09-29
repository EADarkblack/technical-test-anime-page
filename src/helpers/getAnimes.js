import axios from 'axios';

export const getAnimes = (inputValue, page, setData, setLoader) => {
    const getAnimesFunc = async () => {
        setLoader(true);
        const result = await axios.post(`http://localhost:4000/v1/anime/${inputValue}`, {
            limit: 5,
            page
        });
        setData(result);
        setLoader(false);
    }

    return { getAnimesFunc };
}