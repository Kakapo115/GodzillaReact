import Monsters from './data.json';

const monsters = Monsters.map
(
    (Monster) => 
    {
            return(
                <div>
                    <h4>{Monster.monster}</h4>
                    <p>Risk: {Monster.risk}</p>
                    <p>Location: {Monster.Location}</p>
                    <img src={Monster.img} />
                </div>
            )
    }
)

function Content()
{
    return(
        <div>
            <h1>Content</h1>
            {monsters}
        </div>
    );
};

export default Content;