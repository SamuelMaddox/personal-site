# Local Dev Environment Setup <!-- omit in toc -->

- [Mac Fix Home & End Keys](#mac-fix-home--end-keys)
- [Setup VS Code](#setup-vs-code)
  - [VS Code Settings](#vs-code-settings)
  - [VS Code Extensions](#vs-code-extensions)
- [Setup Terminal](#setup-terminal)
  - [Step 0 Setup WSL & Windows Terminal](#step-0-setup-wsl--windows-terminal)
    - [Step 0-1 Setup WSL](#step-0-1-setup-wsl)
    - [Step 0-2 Install Windows Terminal](#step-0-2-install-windows-terminal)
    - [Step 0-3 Change the Default Profile](#step-0-3-change-the-default-profile)
  - [Step 1 - Add Brogrammer Color Theme](#step-1---add-brogrammer-color-theme)
    - [Step 1a - Instructions for Windows Terminal](#step-1a---instructions-for-windows-terminal)
    - [Step 1b - Instructions for Mac Terminal](#step-1b---instructions-for-mac-terminal)
  - [Step 2 - Install Oh My Zsh](#step-2---install-oh-my-zsh)
    - [Step 2a - Instructions for Windows Terminal](#step-2a---instructions-for-windows-terminal)
    - [Step 2b - Instructions for Mac Terminal](#step-2b---instructions-for-mac-terminal)
  - [Step 3 - Install Powerlevel10k Plugin](#step-3---install-powerlevel10k-plugin)
  - [Step 4 - Use ZSH Terminal in VS Code](#step-4---use-zsh-terminal-in-vs-code)
  - [Step 5 - Install Node Version Manager](#step-5---install-node-version-manager)

## Mac Fix Home & End Keys

Navigate to `~/Library` and creat a new folder called `KeyBindings`. Navigate into the `~/Library/KeyBindings` folder and create a new file called `DefaultKeyBinding.dict`. Then add the the following to that file:

```txt
{
/* Remap Home / End keys */
/* Home Button*/
"\UF729" = "moveToBeginningOfLine:";
/* End Button */
"\UF72B" = "moveToEndOfLine:";
/* Shift + Home Button */
"$\UF729" = "moveToBeginningOfLineAndModifySelection:";
/* Shift + End Button */
"$\UF72B" = "moveToEndOfLineAndModifySelection:";
/* Ctrl + Home Button */
"^\UF729" = "moveToBeginningOfDocument:";
/* Ctrl + End Button */
"^\UF72B" = "moveToEndOfDocument:";
 /* Shift + Ctrl + Home Button */
"$^\UF729" = "moveToBeginningOfDocumentAndModifySelection:";
/* Shift + Ctrl + End Button*/
"$^\UF72B" = "moveToEndOfDocumentAndModifySelection:";
}
```

Save the file and restart your mac. The home and end keys should now work as expected.

## Setup VS Code

### VS Code Settings

```json
{
  "workbench.startupEditor": "newUntitledFile",
  "css.lint.unknownAtRules": "ignore",
  "editor.fontSize": 13,
  "editor.formatOnSave": true,
  "editor.guides.bracketPairs": true,
  "editor.quickSuggestionsDelay": 500,
  "editor.tabSize": 2,
  "editor.renderWhitespace": "boundary",
  "editor.rulers": [80, 100],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "files.trimTrailingWhitespace": true,
  "files.eol": "\n",
  "html.autoCreateQuotes": false,
  "diffEditor.renderSideBySide": true,
  "diffEditor.ignoreTrimWhitespace": false,
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "terminal.integrated.fontFamily": "MesloLGS NF",
  "git.autofetch": true,
  "gitlens.gitCommands.closeOnFocusOut": true,
  "gitlens.gitCommands.skipConfirmations": ["fetch:command", "switch:command"],
  "gitlens.menus": {
    "editor": {
      "blame": false,
      "clipboard": true,
      "compare": true,
      "details": false,
      "history": false,
      "remote": false
    },
    "editorGroup": false,
    "editorTab": false,
    "explorer": {
      "clipboard": true,
      "compare": true,
      "history": true,
      "remote": true
    },
    "scmGroup": {
      "compare": true,
      "openClose": true,
      "stash": true,
      "stashInline": true
    },
    "scmItem": {
      "clipboard": true,
      "compare": true,
      "history": true,
      "remote": true,
      "stash": true
    }
  },
  "yaml.customTags": [
    "!And scalar",
    "!And mapping",
    "!And sequence",
    "!If scalar",
    "!If mapping",
    "!If sequence",
    "!Not scalar",
    "!Not mapping",
    "!Not sequence",
    "!Equals scalar",
    "!Equals mapping",
    "!Equals sequence",
    "!Or scalar",
    "!Or mapping",
    "!Or sequence",
    "!FindInMap scalar",
    "!FindInMap mapping",
    "!FindInMap sequence",
    "!Base64 scalar",
    "!Base64 mapping",
    "!Base64 sequence",
    "!Cidr scalar",
    "!Cidr mapping",
    "!Cidr sequence",
    "!Ref scalar",
    "!Ref mapping",
    "!Ref sequence",
    "!Sub scalar",
    "!Sub mapping",
    "!Sub sequence",
    "!GetAtt scalar",
    "!GetAtt mapping",
    "!GetAtt sequence",
    "!GetAZs scalar",
    "!GetAZs mapping",
    "!GetAZs sequence",
    "!ImportValue scalar",
    "!ImportValue mapping",
    "!ImportValue sequence",
    "!Select scalar",
    "!Select mapping",
    "!Select sequence",
    "!Split scalar",
    "!Split mapping",
    "!Split sequence",
    "!Join scalar",
    "!Join mapping",
    "!Join sequence",
    "!And",
    "!If",
    "!Not",
    "!Equals",
    "!Or",
    "!FindInMap",
    "!Base64",
    "!Join",
    "!Cidr",
    "!Ref",
    "!Sub",
    "!GetAtt",
    "!GetAZs",
    "!ImportValue",
    "!Select",
    "!Split"
  ],
  "yaml.schemas": {},
  "redhat.telemetry.enabled": false
}
```

### VS Code Extensions

- AWS Toolkit
- Code Spell Checker
- ESLint
- Git Graph
- GitHub Pull Requests and Issues
- GitLens
- Live Server
- Live Share Extension Pack
- Markdown All in One
- markdownlint
- Markdown Preview Github Styling
- npm
- open in browser
- Prettier
- Remote - WSL
- TODO Highlight
- vscode-styled-components (Look for the official blue badge by the author Styled Components)
- YAML

## Setup Terminal

### Step 0 Setup WSL & Windows Terminal

#### Step 0-1 Setup WSL

> Instructions for WSL installation can be found at <https://docs.microsoft.com/en-us/windows/wsl/install>.

In an Windows Command Prompt ran as admin, run the following command:

```console
wsl --install -d Debian
```

To confirm the WSL version is version 2, restart your computer and then run the following command:

```console
wsl --status
```

#### Step 0-2 Install Windows Terminal

Windows Terminal enables multiple tabs (quickly switch between multiple Linux command lines, Windows Command Prompt, PowerShell, Azure CLI, etc), create custom key bindings (shortcut keys for opening or closing tabs, copy+paste, etc.), use the search feature, and custom themes (color schemes, font styles and sizes, background image/blur/transparency)

You can install Windows Terminal from the Microsoft Store: [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?rtc=1&activetab=pivot:overviewtab).

#### Step 0-3 Change the Default Profile

Open Windows Terminal. Click on the down caret at the top and select settings.Change the default profile to `Debian`.
Also set the Default terminal application to `Windows Terminal`. Then click the Save button in the bottom right.

### Step 1 - Add Brogrammer Color Theme

#### Step 1a - Instructions for Windows Terminal

Open Windows Terminal. Click on the down caret at the top and select settings. Then click on the `Open JSON File` button in the bottom left. In that file look for the `Profiles.list` array and find the profile object where `"name": "Debian"`. Add the following Properties and value to the object:

```json
"colorScheme" : "Brogrammer"
"cursorShape" : "filledBox"
```

The profile be similiar to the following example:

```json
{
  "colorScheme" : "Brogrammer",
  "cursorShape" : "filledBox",
  "guid": "{58ad8b0c-3ef8-5f4d-bc6f-13e4c00f2530}",
  "hidden": false,
  "name": "Debian",
  "source": "Windows.Terminal.Wsl"
},
```

While still in the `settings.json` file find the `schemes` array and add the following object:

```json
{
  "name": "Brogrammer",

  "cursorColor": "#B9B9B9",
  "selectionBackground": "#45A2D2",

  "background": "#131313",
  "foreground": "#D6DBE5",

  "black": "#1F1F1F",
  "blue": "#2A84D2",
  "cyan": "#1081D6",
  "green": "#2DC55E",
  "purple": "#4E5AB7",
  "red": "#F81118",
  "white": "#D6DBE5",
  "yellow": "#ECBA0F",
  "brightBlack": "#D6DBE5",
  "brightBlue": "#1081D6",
  "brightCyan": "#0F7DDB",
  "brightGreen": "#1DD361",
  "brightPurple": "#5350B9",
  "brightRed": "#DE352E",
  "brightWhite": "#FFFFFF",
  "brightYellow": "#F3BD09"
}
```

#### Step 1b - Instructions for Mac Terminal

Go to _Apple Terminal → Preferences → Profiles → Gear Icon → Import_. Import the file located at [./brogrammer.terminal](./brogrammer.terminal)

Then update the `selection` color for the profile to `#45A2D2`

### Step 2 - Install Oh My Zsh

> NOTE: Go to <https://ohmyz.sh> for more information on Oh My Zsh

#### Step 2a - Instructions for Windows Terminal

In the Windows Terminal Linux shell enter the following commands:

```console
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install vim curl git zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

For Windows Terminal it may be useful to add a few aliases after installing Oh My Zsh. One such alias may be similar to the following; which should be added to the `~/.zshrc` file:

```txt
# Navigation Aliases
alias winhome="cd /mnt/c/Users/Samuel"
```

#### Step 2b - Instructions for Mac Terminal

In the Mac Terminal enter the following command:

```console
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### Step 3 - Install Powerlevel10k Plugin

Follow the guide at <https://github.com/romkatv/powerlevel10k>

> NOTE: Read instructions in the above guide all the way through for each step. It is easy to skip the updating of the terminal's profile font, and setting ZSH_THEME="powerlevel10k/powerlevel10k" in `~/.zshrc`.
>
> NOTE: For Windows Terminal go to settings -> Debian -> Appearance and change the the font face to the the powerlevel10k instructions said to download.

When running the Powerlevel10k config use the following styles:

```txt
Prompt Style = Rainbow
Character Set = Unicode
Show Current Time = 12-hour format
Prompt Separators = Angled
Prompt Heads = Sharp
Prompt Tail = Flat
Prompt Height = Two lines
Prompt Connection = Dotted
Prompt Frame = No frame
Connection Color = Lightest
Prompt Spacing = Sparse
Icons = Many Icons
Prompt Flow = Concise
Enable Transient Prompt = No
Instant Prompt Mode = Verbose
```

### Step 4 - Use ZSH Terminal in VS Code

> NOTE: This applies only for Windows 10/11

The `Remote - WSL` extension for vscode that allows VS Code’s UI to run on Windows, while all the commands, extensions, and even the terminal, run on Linux. For more information for how to use `Remote - WSL` read the extensions documentation.

> NOTE: All VS Code extensions will have to be installed for WSL. This is very easy to do. Assuming the `Remote - WSL` is installed and you're running VS Code in WSL mode then simply visit the Extensions tab on the left and click the install buttons.

### Step 5 - Install Node Version Manager

Follow the guide at [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
