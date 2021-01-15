
# Local Dev Environment Setup <!-- omit in toc -->

- [VS Code Settings](#vs-code-settings)
- [VS Code Extensions List](#vs-code-extensions-list)
- [ZSH MacOS Setup](#zsh-macos-setup)
  - [1. Install Oh My ZSH](#1-install-oh-my-zsh)
  - [2. Import Brogrammer Color Theme](#2-import-brogrammer-color-theme)
  - [3. Setup Powerlevel10k Style Theme for ZSH](#3-setup-powerlevel10k-style-theme-for-zsh)
- [ZSH Windows Setup](#zsh-windows-setup)

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

## VS Code Extensions List
* Auto Close Tag
* AWS Toolkit
* ESLint
* Git Graph
* GitLens
* Live Share
* Markdown All in One
* open in browser
* TODO Highlight
* YAML

## ZSH MacOS Setup

### 1. Install Oh My ZSH

Go to https://ohmyz.sh to download and install Oh My ZSH

### 2. Import Brogrammer Color Theme

Go to *Apple Terminal → Preferences → Profiles → Gear Icon → Import*, and select the file located at [./Brogrammer.terminal](./Brogrammer.terminal)

Update the `selection` color for the profile to `#4B4B4B`

>Note: Brogrammer Theme taken from https://github.com/lysyi3m/macos-terminal-themes

### 3. Setup Powerlevel10k Style Theme for ZSH

Follow the guide at https://github.com/romkatv/powerlevel10k

When running the config use the following styles:
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

>Note: Read instructions all the way through for each step. Easy to skip the updating of the terminal's profile font, and setting ZSH_THEME="powerlevel10k/powerlevel10k" in ~/.zshrc.

## ZSH Windows Setup
