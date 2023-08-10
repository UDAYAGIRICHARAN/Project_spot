import React from 'react';
// import cam from '../img/cam.png';
// import add from '../img/add.png';
// import more from '../img/more.png';
import Messages from './Messages';
import Input from './Input';

const Chatbar = () => {
    return (
        <div className='chatbar'>
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPHlHwEo2GvOsmUtjGi8cl_aty1ZHb6lH4iw&usqp=CAU'
                        alt='Video call' />
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8b3R2g6Dqi2dC7d5V1MOfqNJUoV8yyF2D3Q&usqp=CAU'
                        alt='Add user icon' />
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAAD7+/vCwsKysrLz8/PPz8/29vbn5+eYmJienp7u7u4ZGRnX19ekpKRsbGwjIyORkZHi4uLIyMi6uroODg7a2tpVVVUyMjJNTU2IiIhgYGApKSl6eno5OTllZWVGRkY/Pz+rq6t0dHR9ClJnAAAEIUlEQVR4nO2b2WLiIBSGYxY1bnVGo1at3d7/HcfaHEIsBIi9GfJ9dy3h5A9wFkhMEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBZ/N1k+m+XZ5u9vWSyW2faj/Nhmy+K3TPYWOS7fRxrvs/GjUub5Z6VZrD7z+aMmx7O2yNJb5O6oaxGOu/5aJvneYHGfT/qb3B0NFisvkeOToeu3op4TWZQLi8VF2XO5jk0jduPkEjm1dr0947SHmo8ui6OPHhYfEfmnU82VY6ia5cFh8bAMNWlany3+WLtO31x9R6O3sGlcuS2OVkEWHxG58VBzZRMg58nL4lOAxUdEbtvX7FfZNL0yzVZ3sWfrqyZ9bvVbH/Pl5GpxssyP61bLc+pr8k7kqRF555sGka2AcLobg+xVb809H1B3wXPZXjnT8qy1HjwfMddlvGbtxk1rJn6EsEx/PoPz7/Qxyn62G9BmsFr9fIR0paXdZy+Lusi9IfUt9We8E7lrWi6WjDK+NNf4xD/NB4/mtFdoUdHHF5dhIltDMGn84sV+hxd10cK9qrQoah8PTbM7oqaLMJFrvWR68rtRo/rkktNov3TVLUUz5s51cQoVqa2LZn07UkETq12uqKLMa/d0pyqGHRwWHxKpXN6ZCFS0PncLV5H54lrPqZrF7gIuPYeLrOQ/qlYrXX21a+2l0ZVCDaO7tPa81u/G35R3107UgnL3TRJZVVXX1kfdwifoKpftGuBJ1Ufk6FvkrP2ng7lc3eHuE4l6foW6JI1FhwAVP7w2zmrSZrc/xRE81ugXan7sl0jpUflt/wqZn45iKcCRdJGXrz/GMoKelZNKS/a9ptQ/vrsGmaC99YqHREqK9Kw2mzhpTbuykB3xVtMjcdK6BEWk94Y510TWmWvhf6AgD+Cy7rmikmZRWUdZhsDbYlFP4qEZ8E/vzmpAbcc+n3W7/2Z56hAhZXNHtWYTMVcD7rdfuCHVhS311oFj7W8xqeviytK87S8yV7ki4HRCcrQlFziajUjCsLiKo9mELIuZFN0hAy6FliX5Sgb3Dl1J47qWCqHO4M4SUKdeFk+SDe2B2n7DN3Nr1q3WiIyKZRm+dQ6pmTplXeRRA3xYhRrL2YM4TciJthQhZteW85A+ItcSFjzq2YbaLc5mt5B8GbKk0rqPOd8V53DPllK9kuQ269F5YU7Q5QNPaE6h80WPaZAQOoA5jN8P44+l8efD+Gua+OvS+PcW8e8PB7DHj/+cJv6ztgGcl8Z/5h3/e4sBvHsawPvD+N8BD+A9fvzfYgzge5oBfBM1gO/aBvBt4gC+L03i/0Y4GcB33kn83+p/EfvvLW5E/puZmrh/9wQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP87/wC6EEWLt9HcEwAAAABJRU5ErkJggg=='
                        alt='More icon' />
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

export default Chatbar;