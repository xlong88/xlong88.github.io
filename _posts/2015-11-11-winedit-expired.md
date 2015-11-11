---
layout: post
title: Get Rid of Winedit Expired Problem
description: "useful skills"
tags: [Skill post]
image:
  background: triangular.png
---

## options -> options interfaces ... -> Event Handlers -> Exit

add the following sentence just before **End;** in the file

    RegDeleteValue('HKEY_CURRENT_USER', 'Software\WinEdt 9', 'Inst');





  


