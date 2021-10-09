import React from "react";
import css from "./autocomplete.module.css";
import Alerts from "./Alert";

const Autocomplete = () => {
    //  Value - значение инпута
    const [value, setValue] = React.useState("");
    // isOpen - флаг для визуалиции автокомлита
    const [isOpen, setIsOpen] = React.useState(true);
    const [alerts, setAlerts] = React.useState({
        error: "",
        success: "",
    });
    // domains - почтовые домены
    const domains = ["yahoo.com", "gmail.com", "google.com",
        "hotmail.com", "me.com", "aol.com", "mac.com", "live.com",
        "comcast.com", "msn.com", "hotmail.co.uk",
        "yahoo.co.uk", "facebook.com", "verizon.net", "att.net",
        "gmz.com", "mail.com"];
    // checkingDomain - функуия фильтрация  автокомплита
    const checkingDomain = (inputDomain, domain) => {
        const inputDomainWS = inputDomain.split(" ").join("");
        let result = 0;
        let countID = 0;
        for (let i = 0; i < domain.length; i++) {
            if (domain[i] === inputDomainWS[countID]) {
                result++;
                countID++;
            }
        }
        return inputDomainWS.length === result;
    }
    // handleChange - фунция делает управляемым инпут
    const changeHandler = (e) => {
        setValue(e.target.value);
    }
    // handleClick - функция заполнение поля инпута текстовым знчением автокомплита
    const handleClick = (e) => {
        setValue(e.target.textContent);
        setIsOpen(false);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(value.toLowerCase())) {
            setAlerts((old) => {return {...old, error: "Некоректная почта"}});
        }else {


        }

    }
    return (
        <div className={css.autocomplete}>
            <form className={css.autocomplete__form} onSubmit={submitHandler}>
                <input type="text" className={css.email}
                       value={value}
                       onChange={changeHandler}
                       placeholder="Ваш email"
                       onClick={() => setIsOpen(true)}
                       style={{boxShadow: alerts.error? "0px 2px 8px 2px rgba(255,31,11,0.45)":"none"}}
                />
                <ul className={css.domains} onMouseLeave={() => {
                    setIsOpen(false)
                }}>
                    {(value.indexOf("@") !== -1 && isOpen) && domains.filter((option) => {
                        const inputDomain = value.split("@")[1];
                        return checkingDomain(inputDomain, option);
                    }).map((option, index) => {
                        const name = value.split("@")[0];
                        return <li key={index}
                                   className={css.domain} onClick={handleClick}>
                            {name.split(" ").join("") + "@" + option}
                        </li>
                    })}
                </ul>
                <button>Поверка почты</button>
            </form>
            <Alerts
                alerts={alerts}
            />
        </div>
    );
};

export default Autocomplete;
