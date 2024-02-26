import axios from 'axios';

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '32a2693c4cmsh3c1eb7bec4ba6f8p18d3fajsn69fea9e380ce',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        
        return data;
    } catch (error) {
        console.log(error);
    }
}