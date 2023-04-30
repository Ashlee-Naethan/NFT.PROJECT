/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nftStorage = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, price, limit, accesibility) {
    let NFT = {
        "Name": name,
        "Price": price,
        "Limit": limit,
        "Accesibility": accesibility,
    }
    nftStorage.push([NFT.Name, NFT.Price, NFT.Limit, NFT.Accesibility]);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < nftStorage.length; i++) {
        console.log("Name of NFT: " + nftStorage[i][0]);
        console.log("Price of NFT: " + nftStorage[i][1]);
        console.log("Limit of NFT: " + nftStorage[i][2]);
        console.log("Accesible: " + nftStorage[i][3]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs: " + nftStorage.length)
}


// call your functions below this line
mintNFT("NFT #1", "1,500php", 100, true);
mintNFT("NFT #2", "1,000PHP", 100, true);
mintNFT("Trebs Da Great", "100,000,000php", 1, true);
listNFTs();
getTotalSupply();
