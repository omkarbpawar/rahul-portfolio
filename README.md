### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rahul-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd rahul-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

Start the development server:
```bash
npm start
# or
yarn start
```

The website will be available at `http://localhost:3000`.

### Building for Production

Create a production-ready build:
```bash
npm run build
# or
yarn build
```


## Hosting on GitHub Pages

To host this website on GitHub Pages:

1. **Install GitHub Pages Package:**
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Update `package.json`:**
   Add the following fields to your `package.json` file:
   ```json
   "homepage": "https://your-username.github.io/rahul-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy the Website:**
   Run the following command to deploy your website:
   ```bash
   npm run deploy
   ```

4. **Verify Deployment:**
   Your website will be available at `https://your-username.github.io/rahul-portfolio`.

5. **Using a Custom Domain:**
   - Add a file named `CNAME` (all uppercase) in the `public/` directory of your project.
   - Inside the `CNAME` file, add your custom domain (e.g., `www.yourcustomdomain.com`).
     ```plaintext
     www.yourcustomdomain.com
     ```
   - When you deploy, GitHub Pages will automatically associate your custom domain with the project.
   - Verify the DNS settings with your domain registrar:
     - Point the domain's **A Record** to GitHub's IPs:
       ```
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
       ```
     - Add a **CNAME Record** pointing to `your-username.github.io`.

   After DNS propagation, your site will be available at your custom domain.

### Notes
- Ensure your repository is public for GitHub Pages to work.
- Commit and push all changes to your repository before deploying.
