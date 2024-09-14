import classes from "./badge-board.module.css"
import Image from "next/image"

export default function BadgeBoard() {
    return (
        <div className={classes["badge-container"]}>
            <div>
                <Image width={20} height={20} src="/images/badges/trustly.avif" />
                <span>Trustly</span>
            </div>
            <div>
                <Image width={20} height={20} src="/images/badges/swish.avif"/>
                <span> Swish</span>
            </div>
            <div>
                <Image width={20} height={20} src="/images/badges/bankid.avif"/>
                <span>BankID</span>
            </div>
            <div>
                <Image width={20} height={20} src="/images/badges/spelinspektionen.avif"/>
                <span>Licens</span>
            </div>
        </div>
    )
}