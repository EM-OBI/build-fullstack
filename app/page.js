import LikeButton from "./like-button";

function Header({title}) {
    return <h1>Learn {title ? title : 'Default title'}!!!!</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            <Header 
                title="Penus"
            />
            <ul>
            {
                names.map((name) => (
                    <li key={names.indexOf(name)}>I'm learning react from {name}</li>
                ))
            }
            </ul>
            < LikeButton />
        </div>
    );
}
