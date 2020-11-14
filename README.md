# The Office Employee Directory

## Description
The head office of Dunder Mifflin determined their leaders would benefit from an employee directory tool to better acess their teams' information. The Office Employee Directory is the tool they've rolled out to all their offices. It provides managers a snapshow overview of their team. It has sorting and filtering features which allow managers to view employees based on input criteria. The filter function filters the employee list based on employee first name. The sort function sorts the employee list based on first name, last name, position, department, or email. The sort function also has capability to sort A-Z or Z-A. 

## Features
* React is used to create the application and the user interface components
    * There are separate components for the wrapper, jumbotron, container, header, and directory
    * App.js is a stateful component that imports all the other components
    * Multiple useState hooks are utilized to access and update the state of the employee list, filter selection, sort field selection, and sort order selection
    * A useEffect hook is utilized to set the initial rendered employee list to the contents of the employees.json file
    * The Context API is utilized to pass data from the EmployeeContext Provider to it's child, the Directory component, in order to render employee information. It passes the employee state and the ability to sort and filter employees.


## Built With
* [React.js](https://reactjs.org/) - a front-end JavaScript library for building user interfaces and UI components
* [Node.js](https://nodejs.org/en/) - a JavaScript runtime environment that allows JavaScript to be run in command line
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - code that creates the logic and structure of the program
* [JSX](https://reactjs.org/docs/introducing-jsx.html) - a syntax extension to JavaScript used in React to describe whta a UI should look like
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - defines styling on the HTML page
* [Bootstrap](https://getbootstrap.com/) - CSS framework used to build mobile responsive websites
* [Git](https://git-scm.com/) - version control system to track changes in source code
* [GitHub](https://github.com/) - hosts repository and deploys page on GitHub

## Deployed Link
[The Office Employee Directory](https://engrebecca.github.io/employee-directory/) - See it online

![The Office Employee Directory](assets/employee_directory.gif)

## Code
The below code demonstrates how a new Context object is created for the EmployeeContext

        const EmployeeContext = React.createContext({
            firstname: "",
            lastname: "",
            email: "",
            position: "",
            department: "",
            image: ""
        });

The below code demonstrates how the EmployeeContext is used as a Provider which wraps around the Directory component. It provides the Directory with access to the employees state as well as functions to filter and sort the employees list.

        <Wrapper>
            <Header></Header>
            <EmployeeContext.Provider value={
                // Providing EmployeeContext child, Directory, with access to the employees state and ability to filter and sort employees
                employees
                    .filter((employee) => filterRegExp.test(employee.firstname))
                    .sort((a, b) => {
                        if (a[fieldToSortBy] < b[fieldToSortBy]) return -sortOrder
                        if (a[fieldToSortBy] > b[fieldToSortBy]) return sortOrder
                        return 0
                    })
            }>
                <Directory></Directory>
            </EmployeeContext.Provider>
        </Wrapper>

The below code demonstrates how the Directory component uses the EmployeeContext to access the employee state. This allows it to render each employee based on the inital list, filtered list, or sorted list.

    const employees = useContext(EmployeeContext);

    return (<>
        {employees.map((employee, i) => (
            <div className="container" key={i}>
                <div className="row">
                    <div className="col-2 center-text">
                        <img src={employee.image} alt={employee.firstname} className="img-thumbnail"></img>
                    </div>
                    <div className="col-2 center-text">
                        {employee.firstname}
                    </div>
                    <div className="col-2 center-text">
                        {employee.lastname}
                    </div>
                    <div className="col-2 center-text">
                        {employee.position}
                    </div>
                    <div className="col-2 center-text">
                        {employee.department}
                    </div>
                    <div className="col-2 center-text">
                        {employee.email}
                    </div>
                </div>
            </div>
        ))
        }</>
    );

## License
This project is licensed under the MIT license.

## Author
* Rebecca Eng
* [GitHub](https://github.com/engrebecca)
* [LinkedIn](https://www.linkedin.com/in/engrebecca/)
