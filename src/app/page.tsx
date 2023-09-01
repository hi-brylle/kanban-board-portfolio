import AddTask from "@/components/add-task/AddTask";
import Column from "@/components/column/Column";

export default function Home() {
    return (
    <>
        <header>Header here</header>
        <main>
            <Column
                title={"Backlog"}
                tasks={[
                    {id: 1, title: "Task 1", description: "Task 1 Description"},
                    {id: 2, title: "Task 2", description: "Task 2 Description"},
                    {id: 3, title: "Task 3", description: "Task 3 Description"},
                    {id: 4, title: "Task 4", description: "Task 4 Description"},
                    {id: 5, title: "Task 5", description: "Task 5 Description"},
                    {id: 6, title: "Task 6", description: "Task 6 Description"},
                    {id: 7, title: "Task 7", description: "Task 7 Description"},
                    {id: 8, title: "Task 8", description: "Task 8 Description"},
                    {id: 9, title: "Task 9", description: "Task 9 Description"},
                    {id: 10, title: "Task 10", description: "Task 10 Description"},
                ]}
            />
            <Column title={"In Progress"} tasks={[]}></Column>
            <Column title={"Implemented"} tasks={[]}></Column>
            <Column title={"In Testing"} tasks={[]}></Column>
            <Column title={"Tested"} tasks={[]}></Column>
        </main>
    </>
    )    
}