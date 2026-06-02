const data = {

register: {
title:"📝 User Registration",
content:`

<h3>Purpose</h3>
<p>Create a new user account.</p>

<h3>Flow</h3>
<ul>
<li>User enters details</li>
<li>Frontend sends request</li>
<li>Backend validates data</li>
<li>User saved in database</li>
</ul>

<h3>Database</h3>
<ul>
<li>users</li>
</ul>
`
},

login: {
title:"🔐 Login & JWT Authentication",
content:`

<h3>API</h3>
<p>POST /auth/login</p>

<h3>Flow</h3>
<ul>
<li>User enters Email & Password</li>
<li>AuthController validates user</li>
<li>JWT Token generated</li>
<li>Token sent to frontend</li>
<li>Stored in Local Storage</li>
</ul>

<h3>Files</h3>
<ul>
<li>SecurityConfig.java</li>
<li>JwtUtil.java</li>
<li>JwtFilter.java</li>
<li>JwtAuthFilter.java</li>
</ul>
`
},

products:{
title:"📦 Browse Products",
content:`

<h3>API</h3>
<p>GET /products</p>

<h3>Flow</h3>
<ul>
<li>Home Page loads</li>
<li>ProductService called</li>
<li>Repository fetches data</li>
<li>Products displayed</li>
</ul>

<h3>Files</h3>
<ul>
<li>ProductController</li>
<li>ProductService</li>
<li>ProductRepository</li>
</ul>
`
},

details:{
title:"📄 Product Details",
content:`

<h3>API</h3>
<p>GET /products/{id}</p>

<h3>Flow</h3>
<ul>
<li>User clicks product</li>
<li>Fetch product details</li>
<li>Display information</li>
</ul>
`
},

cart:{
title:"🛒 Add To Cart",
content:`

<h3>API</h3>
<p>POST /cart/add/{productId}</p>

<h3>Flow</h3>
<ul>
<li>Add Product</li>
<li>CartController</li>
<li>CartService</li>
<li>CartRepository</li>
<li>Database Updated</li>
</ul>
`
},

viewcart:{
title:"📋 View Cart",
content:`

<h3>API</h3>
<p>GET /cart</p>

<h3>Flow</h3>
<ul>
<li>Fetch Cart Items</li>
<li>Display Products</li>
<li>Calculate Total</li>
</ul>
`
},

order:{
title:"📦 Place Order",
content:`

<h3>API</h3>
<p>POST /orders/place</p>

<h3>Flow</h3>
<ul>
<li>Create Order</li>
<li>Save Order Items</li>
<li>Clear Cart</li>
<li>Order Confirmation</li>
</ul>
`
},

payment:{
title:"💳 Razorpay Payment",
content:`

<h3>API</h3>
<p>POST /payment/create</p>

<h3>Flow</h3>
<ul>
<li>Create Razorpay Order</li>
<li>Open Payment Window</li>
<li>User Pays</li>
</ul>
`
},

verify:{
title:"✅ Payment Verification",
content:`

<h3>API</h3>
<p>POST /payment/verify</p>

<h3>Flow</h3>
<ul>
<li>Receive Payment ID</li>
<li>Verify Signature</li>
<li>Mark Order Success</li>
</ul>
`
},

success:{
title:"🎉 Order Success",
content:`

<h3>Result</h3>
<ul>
<li>Payment Successful</li>
<li>Order Saved</li>
<li>Inventory Updated</li>
</ul>
`
},

history:{
title:"📚 Order History",
content:`

<h3>API</h3>
<p>GET /orders</p>

<h3>Flow</h3>
<ul>
<li>User Opens Orders Page</li>
<li>Fetch Previous Orders</li>
<li>Display History</li>
</ul>
`
}

};

document.querySelectorAll(".step").forEach(step=>{

step.addEventListener("click",()=>{

const key = step.dataset.step;

document.getElementById("detailsPanel").innerHTML=
`

<h2>${data[key].title}</h2>
${data[key].content}
`;

});

});
