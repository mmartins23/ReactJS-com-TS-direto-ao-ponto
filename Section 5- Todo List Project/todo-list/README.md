# Todo List Project


## Components Overview:

1. **Task:**
   
   The Task component is responsible for rendering individual tasks within the application. It consists of a list item containing the task text and a remove button. Each Task component represents one task item in the task list.

2. **TaskList:**
   
   TaskList is a component that manages and displays a list of tasks. It renders multiple instances of the Task component within an unordered list (ul), creating a structured representation of the task list.

3. **TaskInput:**
   
   TaskInput provides the interface for users to input new tasks into the system. It consists of a form with an input field for entering task text and a button for submitting the task. TaskInput enables users to add new tasks to the task list.

**Integration:**

The components Task, TaskList, and TaskInput are integrated into the application layout as follows:

![TodoList](./src/assets/todolist.png)


***

## Components Style Overview:

![TodoList](./src/assets/todolist2.png)

Let's break down CSS:

1. **Body Styles:**
   - `font-family`: Sets the font for the entire document to Arial or a fallback sans-serif font.
   - `background-color`: Sets the background color of the body to a light gray (#f4f4f4).
   - `margin`: Removes default margins from the body.
   - `padding`: Adds 20 pixels of padding to all sides of the body content.

2. **h1 Styles:**
   - `color`: Sets the color of h1 headings to a dark gray (#333).

3. **ul Styles:**
   - `list-style`: Removes default list styles (bullet points).
   - `padding`: Removes default padding from unordered lists.
   - `width`: Sets the width of unordered lists to 500 pixels.

4. **li Styles:**
   - `background-color`: Sets the background color of list items to white (#fff).
   - `border`: Adds a 1 pixel solid border around list items with a light gray color (#ddd).
   - `padding`: Adds 10 pixels of padding vertically and 15 pixels horizontally to list items.
   - `margin-bottom`: Adds 8 pixels of margin at the bottom of each list item.
   - `display`: Configures list items to use flexbox layout.
   - `justify-content`: Aligns content inside list items to space evenly.
   - `align-items`: Vertically centers content inside list items.

5. **input[type="text"] Styles:**
   - `padding`: Adds 10 pixels of padding to text input fields.
   - `border`: Adds a 1 pixel solid border around text input fields with a light gray color (#ddd).
   - `border-radius`: Rounds the corners of text input fields with a 4 pixel radius.
   - `margin-right`: Adds 5 pixels of margin to the right side of text input fields.

6. **button Styles:**
   - `background-color`: Sets the background color of buttons to a green color (#5cb85c).
   - `color`: Sets the text color of buttons to white.
   - `border`: Removes default button borders.
   - `padding`: Adds 10 pixels of padding vertically and 15 pixels horizontally to buttons.
   - `border-radius`: Rounds the corners of buttons with a 4 pixel radius.
   - `cursor`: Sets the cursor to pointer, indicating that the button is clickable.

7. **button:hover Styles:**
   - Changes the background color of buttons to a darker shade of green (#449d44) when hovered over.

8. **button:active Styles:**
   - Changes the background color of buttons to an even darker shade of green (#398439) when clicked.

9. **button[type="submit"] Styles:**
   - Adjusts the background color of submit buttons to a blue color (#337ab7).

10. **button[type="submit"]:hover Styles:**
    - Changes the background color of submit buttons to a darker shade of blue (#286090) when hovered over.

11. **button[type="submit"]:active Styles:**
    - Changes the background color of submit buttons to an even darker shade of blue (#204d74) when clicked.

These styles collectively provide a cohesive and visually appealing design for the components, enhancing the user experience.