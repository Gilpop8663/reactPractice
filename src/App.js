import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const [select, setSelect] = useState("");
  const [name, setName] = useState("");
  const onSubmit = (event) => {
    //console.log({ coins: event.target.value });
    console.log(event.target.value.split(","));
    const [number, string] = event.target.value.split(",");
    setSelect(number);
    setName(string);
  };
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => setCoins(json));
    setLoading(false);
  }, []);
  return (
    <div>
      <h1>The Coins ! ({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          Your Dollar Money :
          <input type="number" onChange={onChange} placeholder="$" />
          {select === "" && amount === 0 ? null : (
            <h4>
              {name} : {amount / select}
            </h4>
          )}
          <div>
            <select onChange={onSubmit}>
              {coins.map((item) => (
                <option
                  value={[[item.quotes.USD.price], [item.name]]}
                  key={item.id}
                >
                  {item.name} ({item.symbol}): ${item.quotes.USD.price}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
