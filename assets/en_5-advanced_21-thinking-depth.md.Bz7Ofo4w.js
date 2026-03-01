import{_ as a,c as r,o as i,a5 as n,j as e,a as t}from"./chunks/framework.Dtwt352Q.js";const m=JSON.parse('{"title":"5.21 Thinking Depth Configuration","description":"Learn to set thinking budget for individual models via opencode.json, and use Ctrl+T shortcut to switch between different depths.","frontmatter":{"title":"5.21 Thinking Depth Configuration","subtitle":"Set thinking budget for individual models","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.21","duration":"18 min","practice":"12 min","level":"Advanced","description":"Learn to set thinking budget for individual models via opencode.json, and use Ctrl+T shortcut to switch between different depths.","tags":["Configuration","Model","Thinking","Shortcut"],"prerequisite":["5.1 Configuration Complete Guide"]},"headers":[],"relativePath":"en/5-advanced/21-thinking-depth.md","filePath":"en/5-advanced/21-thinking-depth.md","lastUpdated":1772014034000}'),d={name:"en/5-advanced/21-thinking-depth.md"};function s(l,o,c,h,p,u){return i(),r("div",null,[...o[0]||(o[0]=[n('<h1 id="_5-21-thinking-depth-configuration" tabindex="-1">5.21 Thinking Depth Configuration <a class="header-anchor" href="#_5-21-thinking-depth-configuration" aria-label="Permalink to “5.21 Thinking Depth Configuration”">​</a></h1><blockquote><p>Treat &quot;thinking depth&quot; like gears: shallow for speed, deep for stability.</p></blockquote><h2 id="what-you-ll-learn" tabindex="-1">What You&#39;ll Learn <a class="header-anchor" href="#what-you-ll-learn" aria-label="Permalink to “What You&#39;ll Learn”">​</a></h2><ul><li>Set thinking budget for individual models</li><li>Understand how the &quot;variants&quot; mechanism controls thinking depth</li><li>Use <kbd>Ctrl</kbd>+<kbd>T</kbd> to switch between different thinking depths</li></ul><hr><h2 id="your-current-dilemma" tabindex="-1">Your Current Dilemma <a class="header-anchor" href="#your-current-dilemma" aria-label="Permalink to “Your Current Dilemma”">​</a></h2><ul><li>Same model, sometimes you want fast, sometimes deep, but don&#39;t know how to switch</li><li>After writing config in <code>opencode.json</code>, unsure if it took effect</li><li>When using relay/proxy models, unsure if you can still control thinking depth</li></ul><hr><h2 id="when-to-use-this" tabindex="-1">When to Use This <a class="header-anchor" href="#when-to-use-this" aria-label="Permalink to “When to Use This”">​</a></h2><ul><li>When you need: make &quot;thinking depth&quot; a switchable gear</li><li>And don&#39;t want: change models or modify config every time</li></ul><hr><h2 id="🎒-before-you-start" tabindex="-1">🎒 Before You Start <a class="header-anchor" href="#🎒-before-you-start" aria-label="Permalink to “🎒 Before You Start”">​</a></h2><ul><li>[ ] Completed <a href="/en/5-advanced/01a-config-basics.html">5.1 Configuration Complete Guide</a></li><li>[ ] Can start OpenCode normally</li></ul><hr><h2 id="core-concept" tabindex="-1">Core Concept <a class="header-anchor" href="#core-concept" aria-label="Permalink to “Core Concept”">​</a></h2><ol><li>OpenCode uses <strong>model variants</strong> to save different thinking depths</li><li>Variants are model-level configurations with higher priority than defaults</li><li><kbd>Ctrl</kbd>+<kbd>T</kbd> cycles through variants</li></ol><div class="info custom-block"><p class="custom-block-title">ℹ️ What is &quot;Thinking Depth&quot;?</p><p>It refers to the model&#39;s &quot;available thinking budget&quot;, such as Anthropic&#39;s <code>thinking.budgetTokens</code>. Higher values mean more tokens available for reasoning, but slower response and higher cost.</p></div><hr><h2 id="follow-along" tabindex="-1">Follow Along <a class="header-anchor" href="#follow-along" aria-label="Permalink to “Follow Along”">​</a></h2><h3 id="step-1-confirm-model-supports-thinking-variants" tabindex="-1">Step 1: Confirm Model Supports Thinking Variants <a class="header-anchor" href="#step-1-confirm-model-supports-thinking-variants" aria-label="Permalink to “Step 1: Confirm Model Supports Thinking Variants”">​</a></h3><p><strong>Why</strong> Not all models have variants, OpenCode checks <code>capabilities.reasoning</code> first.</p><p><strong>How</strong> Choose a model that supports reasoning (e.g., Anthropic / Gemini 3 / OpenAI).</p><p><strong>You Should See</strong> Variants like <code>high</code> / <code>max</code> appear in the model list.</p><hr><h3 id="step-2-set-thinking-budget-for-individual-models-in-opencode-json" tabindex="-1">Step 2: Set Thinking Budget for Individual Models in opencode.json <a class="header-anchor" href="#step-2-set-thinking-budget-for-individual-models-in-opencode-json" aria-label="Permalink to “Step 2: Set Thinking Budget for Individual Models in opencode.json”">​</a></h3><p><strong>Why</strong> Variant config goes under <code>provider.models.[modelID].variants</code>, which can override defaults.</p><p><strong>How</strong> Fill in the corresponding fields based on your Provider:</p><p><strong>Anthropic Example</strong> (thinking.budgetTokens)</p>',28),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "anthropic": {
      "models": {
        "claude-sonnet-4-5": {
          "variants": {
            "high": {
              "thinking": { "type": "enabled", "budgetTokens": 20000 }
            },
            "max": {
              "thinking": { "type": "enabled", "budgetTokens": 32000 }
            }
          }
        }
      }
    }
  }
}`)])],-1),e("p",null,[e("strong",null,"Gemini 3 Example"),t(" (thinkingConfig.thinkingBudget)")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "google": {
      "models": {
        "gemini-3-flash": {
          "variants": {
            "high": {
              "thinkingConfig": { "includeThoughts": true, "thinkingBudget": 16000 }
            },
            "max": {
              "thinkingConfig": { "includeThoughts": true, "thinkingBudget": 24576 }
            }
          }
        }
      }
    }
  }
}`)])],-1),n('<p><strong>You Should See</strong> Variant values take effect after restart.</p><hr><h3 id="step-3-switch-thinking-depths-with-ctrl-t" tabindex="-1">Step 3: Switch Thinking Depths with Ctrl+T <a class="header-anchor" href="#step-3-switch-thinking-depths-with-ctrl-t" aria-label="Permalink to “Step 3: Switch Thinking Depths with Ctrl+T”">​</a></h3><p><strong>Why</strong> After setting up variants, using a shortcut to switch is more convenient.</p><p><strong>How</strong> Press <kbd>Ctrl</kbd>+<kbd>T</kbd> in the chat input box to cycle:</p>',5),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"(none) → high → max → (none) → high → ...")])],-1),n('<p><strong>You Should See</strong> Status bar shows current variant name (e.g., <code>high</code>).</p><hr><h3 id="step-4-customize-variant-names-optional" tabindex="-1">Step 4: Customize Variant Names (Optional) <a class="header-anchor" href="#step-4-customize-variant-names-optional" aria-label="Permalink to “Step 4: Customize Variant Names (Optional)”">​</a></h3><p><strong>Why</strong> Variant names aren&#39;t fixed, you can change them to things like &quot;Deep Think&quot; / &quot;Fast&quot;.</p><p><strong>How</strong> Use custom keys in <code>variants</code>:</p>',5),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "anthropic": {
      "models": {
        "claude-sonnet-4-5": {
          "variants": {
            "fast": { "thinking": { "type": "enabled", "budgetTokens": 8000 } },
            "deep": { "thinking": { "type": "enabled", "budgetTokens": 32000 } }
          }
        }
      }
    }
  }
}`)])],-1),e("p",null,[e("strong",null,"You Should See"),t(),e("kbd",null,"Ctrl"),t("+"),e("kbd",null,"T"),t(' switches between "fast/deep".')],-1),e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},'ℹ️ Custom Variants Are "Added", Not "Replaced"'),e("p",null,[t("OpenCode "),e("strong",null,"merges"),t(" the variants you write in "),e("code",null,"opencode.json"),t(" with default variants. If you only want custom variants, explicitly disable the default "),e("code",null,"high"),t("/"),e("code",null,"max"),t(":")]),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "anthropic": {
      "models": {
        "claude-sonnet-4-5": {
          "variants": {
            "high": { "disabled": true },
            "max": { "disabled": true },
            "fast": { "thinking": { "type": "enabled", "budgetTokens": 8000 } },
            "deep": { "thinking": { "type": "enabled", "budgetTokens": 32000 } }
          }
        }
      }
    }
  }
}`)])])],-1),e("p",null,[e("strong",null,"How to Configure Third-Party Relays")],-1),e("p",null,[t("If your relay uses "),e("code",null,"openai-compatible"),t(", it defaults to "),e("code",null,"reasoningEffort"),t(". Example:")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "relay": {
      "options": {
        "baseURL": "https://your-relay.example.com/v1",
        "apiKey": "{env:RELAY_API_KEY}"
      },
      "models": {
        "gpt-5": {
          "variants": {
            "low": { "reasoningEffort": "low" },
            "high": { "reasoningEffort": "high" }
          }
        }
      }
    }
  }
}`)])],-1),e("p",null,[t("If your relay actually forwards to Anthropic (still using "),e("code",null,"openai-compatible"),t(" SDK), you can directly override with Anthropic fields:")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "relay": {
      "options": {
        "baseURL": "https://your-relay.example.com/v1",
        "apiKey": "{env:RELAY_API_KEY}"
      },
      "models": {
        "claude-sonnet-4-5": {
          "variants": {
            "high": {
              "thinking": { "type": "enabled", "budgetTokens": 20000 }
            },
            "max": {
              "thinking": { "type": "enabled", "budgetTokens": 32000 }
            }
          }
        }
      }
    }
  }
}`)])],-1),n('<p>Prerequisite: your relay server forwards the <code>thinking</code> field to Anthropic as-is.</p><hr><h2 id="checklist-✅" tabindex="-1">Checklist ✅ <a class="header-anchor" href="#checklist-✅" aria-label="Permalink to “Checklist ✅”">​</a></h2><ul><li>[ ] <code>opencode.json</code> contains <code>provider.models.[modelID].variants</code></li><li>[ ] Variant name appears in status bar after startup</li><li>[ ] <kbd>Ctrl</kbd>+<kbd>T</kbd> can cycle through variants</li></ul><hr><h2 id="common-issues" tabindex="-1">Common Issues <a class="header-anchor" href="#common-issues" aria-label="Permalink to “Common Issues”">​</a></h2><table tabindex="0"><thead><tr><th>Symptom</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td><kbd>Ctrl</kbd>+<kbd>T</kbd> does nothing</td><td>Current model has no variants</td><td>Switch to a reasoning-capable model or add variants</td></tr><tr><td>Variants exist but don&#39;t show</td><td>Haven&#39;t switched to a variant yet</td><td>Press <kbd>Ctrl</kbd>+<kbd>T</kbd> once</td></tr><tr><td>Config doesn&#39;t take effect</td><td>Wrong model ID</td><td>Copy complete ID from model list</td></tr><tr><td>Relay shows no change</td><td>Using <code>openai-compatible</code>, only supports reasoningEffort</td><td>Manually override parameters in variants</td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li>Variants are &quot;thinking depth gears&quot;, configured in <code>provider.models.[modelID].variants</code></li><li>Default variants are auto-generated by ProviderTransform, can be overridden by config</li><li><kbd>Ctrl</kbd>+<kbd>T</kbd> cycles through variants</li></ol><hr><h2 id="next-lesson-preview" tabindex="-1">Next Lesson Preview <a class="header-anchor" href="#next-lesson-preview" aria-label="Permalink to “Next Lesson Preview”">​</a></h2><blockquote><p>Next we&#39;ll learn <strong><a href="/en/5-advanced/22-debugging.html">Debugging &amp; Diagnostic Tools</a></strong>.</p><p>You&#39;ll learn:</p><ul><li>How to use <code>opencode debug</code> commands</li><li>Diagnose LSP, config, and search issues</li><li>Analyze OpenCode like a developer</li></ul></blockquote><hr><h2 id="appendix-source-code-reference" tabindex="-1">Appendix: Source Code Reference <a class="header-anchor" href="#appendix-source-code-reference" aria-label="Permalink to “Appendix: Source Code Reference”">​</a></h2><details><summary><strong>Click to expand source code locations</strong></summary><blockquote><p>Updated: 2026-01-16</p></blockquote><table tabindex="0"><thead><tr><th>Feature</th><th>File Path</th><th>Lines</th></tr></thead><tbody><tr><td>Variant generation entry</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/provider/transform.ts#L297-L477" target="_blank" rel="noreferrer"><code>src/provider/transform.ts</code></a></td><td>297-477</td></tr><tr><td>Reasoning filter &amp; exclusion</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/provider/transform.ts#L298-L301" target="_blank" rel="noreferrer"><code>src/provider/transform.ts</code></a></td><td>298-301</td></tr><tr><td>Anthropic thinking budget defaults</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/provider/transform.ts#L371-L385" target="_blank" rel="noreferrer"><code>src/provider/transform.ts</code></a></td><td>371-385</td></tr><tr><td>Gemini 3 thinking budget defaults</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/provider/transform.ts#L421-L439" target="_blank" rel="noreferrer"><code>src/provider/transform.ts</code></a></td><td>421-439</td></tr><tr><td>Variant config Schema</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts#L818-L833" target="_blank" rel="noreferrer"><code>src/config/config.ts</code></a></td><td>818-833</td></tr><tr><td>Variant config merge</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/provider/provider.ts#L929-L936" target="_blank" rel="noreferrer"><code>src/provider/provider.ts</code></a></td><td>929-936</td></tr><tr><td>Ctrl+T default shortcut</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts#L632-L688" target="_blank" rel="noreferrer"><code>src/config/config.ts</code></a></td><td>632-688</td></tr><tr><td>Ctrl+T command binding</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/cli/cmd/tui/app.tsx#L393-L399" target="_blank" rel="noreferrer"><code>src/cli/cmd/tui/app.tsx</code></a></td><td>393-399</td></tr><tr><td>Variant cycling logic</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/cli/cmd/tui/context/local.tsx#L310-L346" target="_blank" rel="noreferrer"><code>src/cli/cmd/tui/context/local.tsx</code></a></td><td>310-346</td></tr><tr><td>Variant display logic</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/cli/cmd/tui/component/prompt/index.tsx#L696-L700" target="_blank" rel="noreferrer"><code>src/cli/cmd/tui/component/prompt/index.tsx</code></a></td><td>696-700</td></tr><tr><td>Variant name rendering</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/cli/cmd/tui/component/prompt/index.tsx#L946-L950" target="_blank" rel="noreferrer"><code>src/cli/cmd/tui/component/prompt/index.tsx</code></a></td><td>946-950</td></tr><tr><td>Variant applied to LLM params</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/session/llm.ts#L96-L109" target="_blank" rel="noreferrer"><code>src/session/llm.ts</code></a></td><td>96-109</td></tr><tr><td>Variant keybind config</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts#L632-L688" target="_blank" rel="noreferrer"><code>src/config/config.ts</code></a></td><td>632-688</td></tr></tbody></table><p><strong>Key Constants</strong>:</p><ul><li><code>WIDELY_SUPPORTED_EFFORTS = [&quot;low&quot;, &quot;medium&quot;, &quot;high&quot;]</code></li><li><code>OPENAI_EFFORTS = [&quot;none&quot;, &quot;minimal&quot;, &quot;low&quot;, &quot;medium&quot;, &quot;high&quot;, &quot;xhigh&quot;]</code></li></ul></details>',17)])])}const b=a(d,[["render",s]]);export{m as __pageData,b as default};
