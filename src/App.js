import React, { useState } from 'react';
import './App.css';
import SearchComponent from './Components/SearchComponents';
import ShowCourseComponent from './Components/ShowCourseComponents';
import UserCartComponent from './Components/UserCartComponents';
 
function App() {
    const [courses] = useState([
        { id: 1, 
          name: ' T-shirt', 
          price: 299, 
          image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7jrTHxI095ot1V2TitH8vWPdBUhShqLf0g&usqp=CAU'
        },
        { id: 2, 
          name: 'casual shoe', 
          price: 699, 
          image: 
'data:image/jpeg;base64,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'
        },
        { id: 3, 
          name: 'samsung laptop', 
          price: 77799, 
          image: 
'data:image/jpeg;base64,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'
        },
        { id: 3, 
          name: 'i phone', 
          price: 140000, 
          image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5J7jAiO7uxSEKL0lo_lJ3Nc8l9tjOi-w_QQ&usqp=CAU'
        },
        { id: 3, 
          name: 'power bank', 
          price: 1400, 
          image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceAky7wRrnb_Fajbg5_s2iakJCg-uxaOgKw&usqp=CAU'
        }
    ]);
 
    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
 
    const addCourseToCartFunction = (GFGcourse) => {
        const alreadyCourses = cartCourses
                               .find(item => item.product.id === GFGcourse.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === GFGcourse.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
        }
    };
 
    const deleteCourseFromCartFunction = (GFGCourse) => {
        const updatedCart = cartCourses
                            .filter(item => item.product.id !== GFGCourse.id);
        setCartCourses(updatedCart);
    };
 
    const totalAmountCalculationFunction = () => {
        return cartCourses
               .reduce((total, item) => 
                           total + item.product.price * item.quantity, 0);
    };
 
    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };
 
    const filterCourseFunction = courses.filter((course) =>
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );
 
    return (
        <div className="App">
            <SearchComponent searchCourse={searchCourse} 
                             courseSearchUserFunction=
                                 {courseSearchUserFunction} />
            <main className="App-main">
                <ShowCourseComponent
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />
 
                <UserCartComponent
                    cartCourses={cartCourses}
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                    totalAmountCalculationFunction={
                        totalAmountCalculationFunction
                    }
                    setCartCourses={setCartCourses}
                />
            </main>
        </div>
    );
}
 
export default App;
