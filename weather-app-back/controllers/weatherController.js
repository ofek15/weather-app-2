
const fetchweather = async (req, res) => {
    try{
        const place=req.body.place
        console.log(place,"place")
        fetch(
            `http://api.weatherapi.com/v1/current.json?key=90e9aa3641dd4b31a09190503231208&q=${place}&aqi=no`)
            .then((response) => response.json())
            .then((data) => {
                const x = data
                res.status(200).json(x);
            })

    }catch (err) {
        res.status(500).json(err.message);
        console.log(err.message)
    }
  };

  module.exports = {fetchweather}