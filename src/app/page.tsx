import AddTask from "@/components/AddTask";
import Column from "@/components/column/Column";

export default function Home() {
    return (
    <>
        <header>Header here</header>
        <main>
            <Column title={"Backlog"}></Column>
            <Column title={"In Progress"}></Column>
            <Column title={"Implemented"}></Column>
            <Column title={"In Testing"}></Column>
            <Column title={"Tested"}></Column>
        </main>
    </>
    )    
}