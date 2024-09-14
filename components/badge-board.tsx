import classes from "./badge-board.module.css"
import Image from "next/image"

export default function BadgeBoard() {
    return (
        <div className="">
            <div>
                <Image />
                <span>Trustly</span>
            </div>
            <div>
                <Image />
                <span> Swish</span>
            </div>
            <div>
                <Image />
                <span>BankID</span>
            </div>
            <div>
                <Image />
                <span>Licens</span>
            </div>
        </div>
    )
}