
# Local Dev Environment Setup <!-- omit in toc -->

- [Setup VS Code](#setup-vs-code)
  - [VS Code Settings](#vs-code-settings)
  - [VS Code Extensions](#vs-code-extensions)
- [Setup Terminal](#setup-terminal)
  - [Step 0 - Setup WSL & Windows Terminal](#step-0---setup-wsl--windows-terminal)
    - [0-1 Install WSL 1](#0-1-install-wsl-1)
    - [0-2. Upgrade to WSL 2](#0-2-upgrade-to-wsl-2)
    - [0-3. Download the Linux Kernel Update Package](#0-3-download-the-linux-kernel-update-package)
    - [0-4. Set WSL 2 as Your Default Version](#0-4-set-wsl-2-as-your-default-version)
    - [0-5. Install Your Linux Distribution of Choice](#0-5-install-your-linux-distribution-of-choice)
    - [0-6 Install Windows Terminal](#0-6-install-windows-terminal)
    - [0-7 Change the Default Profile](#0-7-change-the-default-profile)
  - [Step 1 - Add Brogrammer Color Theme](#step-1---add-brogrammer-color-theme)
    - [Instructions for Windows Terminal](#instructions-for-windows-terminal)
    - [Instructions for Mac Terminal](#instructions-for-mac-terminal)
  - [Step 2 - Install Oh My Zsh](#step-2---install-oh-my-zsh)
    - [Instructions for Windows Terminal](#instructions-for-windows-terminal-1)
    - [Instructions for Mac Terminal](#instructions-for-mac-terminal-1)
  - [Step 3 - Install Powerlevel10k Plugin](#step-3---install-powerlevel10k-plugin)
  - [Step 4 - Use ZSH Terminal in VS Code](#step-4---use-zsh-terminal-in-vs-code)
    - [Setup for Windows](#setup-for-windows)
    - [Setup for Mac](#setup-for-mac)

# Setup VS Code
## VS Code Settings
```json
{
    "workbench.startupEditor": "newUntitledFile",
    "editor.fontSize": 13,
    "editor.tabSize": 2,
    "editor.renderWhitespace": "boundary",
    "editor.rulers": [
        100
    ],
    "files.insertFinalNewline": true,
    "files.trimFinalNewlines": true,
    "files.trimTrailingWhitespace": true,
    "files.eol": "\n",
    "diffEditor.renderSideBySide": true,
    "terminal.integrated.shell.osx": "/bin/zsh",
    "terminal.integrated.fontFamily": "MesloLGS NF",
    "window.zoomLevel": 0,
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
        "!FindInMap mappping",
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
        "!Join sequence"
    ],
    "gitlens.gitCommands.closeOnFocusOut": true,
    "gitlens.gitCommands.skipConfirmations": [
        "fetch:command",
        "switch:command"
    ],
    "editor.minimap.enabled": false,
    "aws.profile": "profile:default",
    "editor.quickSuggestionsDelay": 500,
}
```

## VS Code Extensions
- Auto Close Tag
- AWS Toolkit
- ESLint
- Git Graph
- GitLens
- Live Share
- Markdown All in One
- open in browser
- TODO Highlight
- YAML


# Setup Terminal

## Step 0 - Setup WSL & Windows Terminal
> NOTE: If you're not on Windows continue to Step 1

>For more information about WSL visit [Windows Subsystem for Linux Installation Guide for Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

> For more information about Windows Terminal Visit [What is Windows Terminal?](https://docs.microsoft.com/en-us/windows/terminal/)

### 0-1 Install WSL 1

Open PowerShell as Administrator and run:

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

### 0-2. Upgrade to WSL 2

Before installing WSL 2, you must enable the Virtual Machine Platform optional feature.

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

Restart your machine to complete the WSL install and update to WSL 2.

### 0-3. Download the Linux Kernel Update Package

Download and run the following package: https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi

### 0-4. Set WSL 2 as Your Default Version

Open PowerShell and run this command to set WSL 2 as the default version when installing a new Linux distribution

```powershell
wsl --set-default-version 2
```

### 0-5. Install Your Linux Distribution of Choice

Open the Microsoft Store and select your favorite Linux distribution (I prefer [Debian](https://www.microsoft.com/en-us/p/debian/9msvkqc78pk6?rtc=1&activetab=pivot:overviewtab)). Once the distribution is installed open it up. You'll be asked to wait for a minute or two for files to de-compress and be stored on your PC. All future launches should take less than a second. You will then need to create a user account and password for your new Linux distribution.

CONGRATULATIONS! You've successfully installed and set up a Linux distribution that is completely integrated with your Windows operating system!

### 0-6 Install Windows Terminal

Windows Terminal enables multiple tabs (quickly switch between multiple Linux command lines, Windows Command Prompt, PowerShell, Azure CLI, etc), create custom key bindings (shortcut keys for opening or closing tabs, copy+paste, etc.), use the search feature, and custom themes (color schemes, font styles and sizes, background image/blur/transparency)

You can install Windows Terminal from the Microsoft Store: [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?rtc=1&activetab=pivot:overviewtab).

### 0-7 Change the Default Profile

Open Windows Terminal. Click on the down caret at the top and select settings. This will open a `settings.json` file. In that file look for the `Profiles.list` array. In that array find the profile object associated with the Linux distribution you downloaded. Copy the the value from the `guid` property and paste it as the value for the `defaultProfile` property.

## Step 1 - Add Brogrammer Color Theme

### Instructions for Windows Terminal
> Example `settings.json` file for Windows Terminal can be found at [./windows-terminal-settings.json](./windows-terminal-settings.json)

Open Windows Terminal. Click on the down caret at the top and select settings. This will open a `settings.json` file. In that file look for the `Profiles.list` array and find the profile object associated with the Linux distribution you downloaded. Add the following propertys and value to the object:

```json
"cursorShape" : "filledBox"
"colorScheme" : "Brogrammer"
```

The profile be similiar to the following example:

```json
{
    "guid": "{58ad8b0c-3ef8-5f4d-bc6f-13e4c00f2530}",
    "hidden": false,
    "name": "Debian",
    "source": "Windows.Terminal.Wsl",
    "cursorShape": "filledBox",
    "colorScheme" : "Brogrammer"
},
```
While still in the `settings.json` file find the `schemes` array and add the following object:

```json
{
    "name" : "Brogrammer",

    "cursorColor": "#B9B9B9",
    "selectionBackground": "#45A2D2",

    "background" : "#131313",
    "foreground" : "#D6DBE5",

    "black" : "#1F1F1F",
    "blue" : "#2A84D2",
    "cyan" : "#1081D6",
    "green" : "#2DC55E",
    "purple" : "#4E5AB7",
    "red" : "#F81118",
    "white" : "#D6DBE5",
    "yellow" : "#ECBA0F",
    "brightBlack" : "#D6DBE5",
    "brightBlue" : "#1081D6",
    "brightCyan" : "#0F7DDB",
    "brightGreen" : "#1DD361",
    "brightPurple" : "#5350B9",
    "brightRed" : "#DE352E",
    "brightWhite" : "#FFFFFF",
    "brightYellow" : "#F3BD09"
}
```

### Instructions for Mac Terminal

Go to *Apple Terminal → Preferences → Profiles → Gear Icon → Import*. Import the file located at [./brogrammer.terminal](./brogrammer.terminal)

Then update the `selection` color for the profile to `#45A2D2`

## Step 2 - Install Oh My Zsh
> NOTE: Go to https://ohmyz.sh for more information on Oh My Zsh

### Instructions for Windows Terminal

In the Windows Terminal Linux shell enter the following commands:

```console
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install vim curl git zsh
$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### Instructions for Mac Terminal

In the Mac Terminal enter the following command:

```console
$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Step 3 - Install Powerlevel10k Plugin

Follow the guide at https://github.com/romkatv/powerlevel10k

>NOTE: Read instructions in the above guide all the way through for each step. It is easy to skip the updating of the terminal's profile font, and setting ZSH_THEME="powerlevel10k/powerlevel10k" in ~/.zshrc.

>NOTE: For Windows Terminal add the `fontFace` property to the profile object associated with the Linux distribution you downloaded. More information can be found at https://docs.microsoft.com/en-us/windows/terminal/customize-settings/profile-settings#font-face

When running the Powerlevel10k config use the following styles:
```
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

## Step 4 - Use ZSH Terminal in VS Code

### Setup for Windows

### Setup for Mac






vscode use wsl zsh (look into remote-wsl and add extension to the list found in this readme)
