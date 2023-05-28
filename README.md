# Keyvault Browser Extension

<!-- make sure to put href link after deployed to each browser vendor store -->

<a href="" target="_blank"><img src="https://imgur.com/3C4iKO0.png" width="64" height="64"></a>
<a href="" target="_blank"><img src="https://imgur.com/ihXsdDO.png" width="64" height="64"></a>
<a href="" target="_blank"><img src="https://imgur.com/vMcaXaw.png" width="64" height="64"></a>
<a href="" target="_blank"><img src="https://imgur.com/nSJ9htU.png" width="64" height="64"></a>
<a href="" target="_blank"><img src="https://imgur.com/ENbaWUu.png" width="64" height="64"></a>
<a href="" target="_blank"><img src="https://imgur.com/EuDp4vP.png" width="64" height="64"></a>
<a href="" target="_blank"><img src="https://imgur.com/z8yjLZ2.png" width="64" height="64"></a>
<a href="" target="_blank"><img src="https://imgur.com/MQYBSrD.png" width="64" height="64"></a>

The KeyVault browser extension is written using the Web Extension API and React.

# Related projects:

- [keyvault/server](https://github.com/KeyVault/keyvault-core): The core infrastructure backend (API, database, etc).
  <br/>
  <br/>

## Setup instructions

1.  Clone the repository:

```bash
   git clone https://github.com/KeyVault/keyvault.git
```
\
2.  Install the dependencies:

```bash
   npm i
```

3.  Build and run:

```sh
   npm run start
```

<br/>

## Testing and Debugging

### Chrome and Chromium-based browsers

<p>To load the browser extension build:</p>
<ol><li>Navigate to <code>chrome://extensions</code> in your address bar. This will open the extensions page</li><li>Enable “developer mode” (toggle switch)</li><li>Click the “Load unpacked” button</li><li>Open the <code>build</code> folder of your local repository and confirm your choice</li></ol>

<p>You will now have your local build of the browser extension installed.</p>
<p>You can debug the background page of the browser extension by clicking “background.html” underneath
the KeyVault heading in <code>chrome://extensions</code>. You can debug the popup by right-clicking it while
it is open and clicking “Inspect”.</p>

<h3 class="anchor anchorWithStickyNavbar_LWe7" id="firefox">Firefox<a href="#firefox" class="hash-link" aria-label="Direct link to Firefox" title="Direct link to Firefox">​</a></h3>
<p>To load the browser extension build:</p>
<ol><li>Navigate to <code>about:debugging</code> in your address bar. This will open the add-on debugging page</li><li>Click “This Firefox”</li><li>Click “Load Temporary Add-on”</li><li>Open the <code>build</code> folder of your local repository and open the <code>manifest.json</code> file</li></ol>

<p>The temporary add-on will only be installed for the current session. If you close and re-open
Firefox, you will have to load the temporary add-on again.</p>

<p>You can debug the background page of the browser extension by clicking the “Inspect” button next to
the Bitwarden heading in the Temporary Extensions page. To debug the popup:</p>

<ol><li><p>Inspect the background page using the instructions above</p></li><li><p>Click the “three dots” in the top right-hand corner of the debugger and click “Disable Pop-up
Auto-hide”</p><p><img loading="lazy" alt="Screenshot of the context menu" src="we_need_example_iamge" width="258" height="317" class="img_ev3q"></p></li><li><p>Open the extension popup</p></li><li><p>Click the “iframe” button (next to the “three dots”) and select “/popup/index.html”</p></li></ol>

<br/>
<br/>

# Contribute

Code contributions are welcome! Please commit any pull requests against the `main` branch. Learn more about how to contribute by reading the [Contributing Guidelines](https://contributing.keyvault.com/contributing/). Check out the [Contributing Documentation](https://contributing.keyvault.com/) for how to get started with your first contribution.

Security audits and feedback are welcome. Please open an issue or email us privately if the report is sensitive in nature. You can read our security policy in the [`SECURITY.md`](SECURITY.md) file.
