import React, {useState, useEffect} from "react";
import countrycodeList from "./countries";


function Account(props){

    const [view, setView] = useState("numview");

    return(
        <div className="oauth-view rel">
            <h1 className="s18 fontb"> Sign-in</h1>
            <h1 className="s15 fontn"> Enter your phone number to receive the verification code</h1>

            <select className="iput s15 fontb">
                {
                    countrycodeList.map(e=> {
                        return (
                            <option value={e.dial_code}>{e.name}</option>
                    )
                })
            }


            </select>



        </div>
        
        )


}