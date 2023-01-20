import React, {  Component, useEffect, useState } from 'react';

import WheelComponent from "../components/WheelComponent";

import TrPortal from "../utils/Portal";
import Confetti from "react-confetti";
import {render} from "react-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useHistory } from 'react-router-dom';


interface WheelSpinnerPageState {
    portal: boolean;
    show: boolean;
    winnerForm: boolean;
}

const ChallengesPage: React.FC = () =>{
    const history = useHistory();

    const initialState: WheelSpinnerPageState = {
        portal: false,
        show: false,
        winnerForm: false
    }
    const [state,setState] = useState(initialState);
    const [isValid,setIsValid] = useState(false);

    useEffect(() => {
        if(isValid) {
            history.push("/home");
        }
    }, [isValid]);

    const handleSubmit = () => {
        setIsValid(true);
    };

    let objIndex: { [seg: string] : number; } = {
        "2 free shots":1,
        "1 free shot" : 2 ,
        "2 free beers":3,
        "1 free beer" : 4 ,
        "2 free cocktails":5,
        "1 free cocktails" : 6 ,
        "Better Luck Next Time :((":7
    }
    const winnningSegments :number[] = [
            1,2,3,4,5,6
        ];

    const segments = [
        "2 free shots",
        "1 free shot",
        "2 free beers",
        "1 free beer",
        "1 free cocktail",
        "2 free cocktails",
        "Better luck next time :((",
        "Better luck next time :((",
        "Better luck next time :((",
        "Better luck next time :((",
    ];

    const weelColors = () => {
        let arr: string[] =  [];
        let colors: string[] = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
        segments.forEach((el) => {
            // @ts-ignore
            let color: string = colors.shift();
            arr.push(color);
            colors.push(color);
        });

        return arr;
    };
    const segColors = weelColors();

    // const rand = () => {
    //   return setTimeout(() => {
    //     return segments[Math.floor(Math.random() * segments.length)];
    //   }, 5000);
    // };
    const onFinished = (winner: string) => {

        if (winnningSegments.includes(objIndex[winner])){
            setState({ portal: false, show: true, winnerForm: true });
        }else{
            console.log("ai pierdut");
        }

    };

    return (
        <div className='text-center'>
        <Header/>
        <label className='titleWheel'>Spin the wheel to earn cool prizes!</label>
        <div
            // id="pankaj"
            style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "70px",
                paddingBottom: "70px"
            }}
        >
            {state.show && <Confetti width={1600} height={1019} />}
            <WheelComponent
                segments={segments}
                segColors={segColors}
                winningSegment={""}
                onFinished={(winner: any) => onFinished(winner)}
                primaryColor="gray"
                contrastColor="white"
                buttonText="Spin"
                isOnlyOnce={false}
            />
            {state.portal ? <TrPortal /> : null}
            {state.show && (
                // modal
                <div className="box">
                    <h2 className="titleWin">
                        CONGRATULATIONS!! YOU WON {state.show} !!!
                    </h2>
                    <div className="closeContainer">
                        <button
                            className="closepankaj"
                            onClick={() => setState({ ...state,show: false })}
                        >
                            OK
                        </button>
                    </div>

                </div>
            )}
            <div>
                { state.winnerForm && (
                    <form className="lugu" onSubmit={handleSubmit}>
                        <label className='byx'>
                            Name:
                            <input type="text" name="name" required/>
                        </label>
                        <br/>
                        <label className='byx'>
                            Email:
                            <input type="text" name="email" required/>
                        </label>
                        <br/>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default ChallengesPage;
