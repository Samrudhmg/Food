#food-explorer
---------------
This project is a React.js application that allows users to explore food products using the OpenFoodFacts API. Key features include searching, filtering by category, sorting, viewing detailed product information, and adding items to the cart.

Key Features:
-------------
>Product Search: Users can search for products by name.
>Category Filtering: Products can be filtered by categories (initially set to "snacks").
>Sorting: Products can be sorted by name (A-Z, Z-A) and nutrition grade (ascending/descending).
>Pagination: A "Load More" button dynamically loads additional products.
>Cart Functionality: Users can add products to a cart, with a confirmation alert.
>Conditional Image Rendering: Displays a stock image if no product image is available.
>Responsive Design: TailwindCSS is used to ensure mobile responsiveness.

Libraries Used:
---------------
>React.js: For building the user interface.
>React Router: For handling navigation.
>Context API: For state management across components.
>TailwindCSS: For styling and responsive design.
>OpenFoodFacts API: For fetching food product data.

Problem-Solving Methods:
-------------------------

1.State Management with Context API--> I have used React's Context API to manage global states like products, categories, cart, search queries, and sorting preferences. Easy data sharing through components without Prop drilling.

2.API Integration--> The fetch method within useEffect was used to handle API calls when users searched, filtered, or loaded more products.

3.Search and Filtering--> I have used the input form to take the input from the user passed it to the API and searched the products dynamically. The dropdown method each time the user changes the category APi call will be initiated.

4.Sorting--> Used JavaScript's "Sort()" method to sort the filtered products.

5.Pagination with "Load More"--> Every time the load more was clicked more products were fetched by API.

6.Cart Functionality: Implemented an Add to Cart feature, where products could be added to the cart, and the product remained in the cart until removed.

7.Responsive Design: TailwindCSS utilities were used to make the UI responsive across different screen sizes. Flexbox and grid utilities ensured proper alignment and layout adjustments for both small and large screens.

8.Fallback for Missing Images: For products without images, a default stock image was rendered to ensure visual consistency on the product cards.



Thank you."# Food" 
