import { employType } from "./employI";
import Employ from "./employ";


export async function getEmployList(): Promise<Employ[]> {
    const employsRaw = await fetch("./db.json");
    const employList = await (employsRaw.json()) as Employ[];
    return employList
}