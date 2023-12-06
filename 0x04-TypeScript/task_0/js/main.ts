interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const john: Student = {
  firstName: 'John',
  lastName: 'Bob',
  age: 25,
  location: 'San Fransisco',
};

const mark: Student = {
  firstName: 'Mark',
  lastName: 'James',
  age: 20,
  location: 'Texas',
};

const studentsList: Array<Student> = [john, mark];

const displayStudent = (studentsList: Array<Student>): void => {
  const table = document.createElement('table');
  const head = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tbody = document.createElement('tbody');

  headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
  head.insertAdjacentElement('beforeend', headRow);

  for (const student of studentsList) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tbody.insertAdjacentElement('beforeend', bodyRow);
  }
  table.insertAdjacentElement('beforeend', head);
  table.insertAdjacentElement('beforeend', tbody);
  document.body.insertAdjacentElement('beforeend', table);
};

const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    background-color: #eee;
  }
  table {
    text-align: center;
    width: 500px;
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
    background-color: lightgreen;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: lightgrey;
  }
`;

displayStudent(studentsList);

const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';
