const getCachedFormData = (key) => {
    let cachedData = localStorage.getItem(key);
    let jsonData = JSON.parse(cachedData);
    if (
      jsonData &&
      Array.isArray(jsonData.data)
    ) {
      return { isFound: true, data: jsonData.data };
    } else {
      return { isFound: false };
    }
  };
  
const setCacheForm= (key, data) => {
    console.log('local',JSON.stringify({data:data}))
    localStorage.setItem(
      key,
      JSON.stringify({
        data: data,
      })
    );
  };
export {setCacheForm,getCachedFormData}