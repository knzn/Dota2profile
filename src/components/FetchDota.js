import React, { useState, useEffect } from "react";
import axios from "axios";
import AccountInfo from "./AccountInfo";

const FetchDota = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.opendota.com/api/players/147929380")
      .then((res) => {
        console.log(res);
        setInfos([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {infos.map((info) => {
          return (
            <AccountInfo
              key={info.profile.account_id}
              dotaId={info.profile.account_id}
              dotaAvatar={info.profile.avatarfull}
              dotaName={info.profile.personaname}
              dotaMMR={info.competitive_rank}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FetchDota;
