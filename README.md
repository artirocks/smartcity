
<div align="center">
  <h1>URBAN REPAIR: Holding Hands to create Smart City</h1>
</div>
<br>

<br/>

<!-- ABOUT THE PROJECT -->

<!-- Key Features -->
## **Key Features**
<br>
<ul>
  <li>Citizen and Authority onboards on platform</li>
  <li>Admin Panel</li>
  <li>Citizen can report issue of city</li>
  <li>Citizen can also come forward and work on to resolve the issue</li>
  <li>Concerned Authority will be notified about the issue.</li>
  <li>Empowering everyone to bring attention  to pressing problems in city.</li>
  <li>Geo-tagging</li>
  <li>Incentives reporters and resolvers to promote activity</li>
</ul>  
<br>
<br>

### **Tech Stack used**

* [Ethereum Smart Contracts](https://ethereum.org/en/developers/docs/smart-contracts/)
* [InterPlanetary File System (IPFS)](https://ipfs.io/)
* [Solidity](https://docs.soliditylang.org/en/v0.8.11/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/)
* [Web3.js](https://web3js.readthedocs.io/en/v1.5.2/getting-started.html)
* [MongoDb](https://www.mongodb.com/)
* [Ganache GUI](https://trufflesuite.com/ganache/)
* [MetaMask](https://metamask.io/)

![alt text](https://media.geeksforgeeks.org/wp-content/uploads/20200619214524/Tech-Stack-used-for-developing-dApps.png)


<br/>

## Step 1. Clone the project
`git clone <github link>`

## Step 2. Install dependencies
```
$ cd client
$ npm install
```
## Step 3. Start Ganache
Open the Ganache GUI client that you downloaded and installed. This will start your local blockchain instance. You can also use other local blockchains.

## Step 4. Compile & Deploy Election Smart Contract
```
$truffle compile
$truffle migrate --reset
```
You must migrate the verification smart contract each time your restart ganache.

## Step 5. Configure Metamask
- Unlock Metamask
- Connect metamask to your local Etherum blockchain provided by Ganache.
- Import an account provided by ganache.

## Step 6. Run the Front End Application
`$ npm start`
Visit this URL in your browser: http://localhost:3000

## Step 6. Run the Back End Application
`$ npm run server`
Visit this URL in your browser: http://localhost:5000

