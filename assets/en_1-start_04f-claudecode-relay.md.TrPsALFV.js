import{_ as n,c as l,o as i,a5 as t,j as e,a as o,ar as d}from"./chunks/framework.Dtwt352Q.js";const g=JSON.parse('{"title":"Third-Party Relay (Claude Code Compatible)","description":"Connect to Anthropic-compatible interfaces using third-party relays/gateways to use Claude models in OpenCode.","frontmatter":{"title":"Third-Party Relay (Claude Code Compatible)","subtitle":"baseURL (.../v1) + API Key (Choose One)","course":"OpenCode Practical Course","stage":"Stage 1","lesson":"1.4f","duration":"15 minutes","practice":"5 minutes","level":"Beginner","description":"Connect to Anthropic-compatible interfaces using third-party relays/gateways to use Claude models in OpenCode.","tags":["Model","Claude","Anthropic","Relay","baseURL"],"prerequisite":["1.2 Installation"]},"headers":[],"relativePath":"en/1-start/04f-claudecode-relay.md","filePath":"en/1-start/04f-claudecode-relay.md","lastUpdated":1772014034000}'),s={name:"en/1-start/04f-claudecode-relay.md"};function r(c,a,p,u,h,m){return i(),l("div",null,[...a[0]||(a[0]=[t('<h1 id="third-party-relay-claude-code-compatible" tabindex="-1">Third-Party Relay (Claude Code Compatible) <a class="header-anchor" href="#third-party-relay-claude-code-compatible" aria-label="Permalink to “Third-Party Relay (Claude Code Compatible)”">​</a></h1><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key takeaways from this lesson:</p><p><img src="'+d+'" alt="Third-Party Relay (Claude Code Compatible) Notes" data-zoom-src="/images/1-start/claudecode-relay-notes.jpeg"></p><p>This page does one thing: connect a third-party relay that &quot;claims Claude Code compatibility&quot; to OpenCode.</p><h2 id="what-you-ll-be-able-to-do" tabindex="-1">What You&#39;ll Be Able to Do <a class="header-anchor" href="#what-you-ll-be-able-to-do" aria-label="Permalink to “What You&#39;ll Be Able to Do”">​</a></h2><p>You will complete 3 tasks:</p><ol><li>Configure an independent provider (e.g., <code>claudecode-relay</code>) pointing <code>baseURL</code> to the relay&#39;s <code>.../v1</code></li><li>Configure API Key (<strong>Choose one</strong>: write in <code>opencode.json</code> or store in <code>auth.json</code>)</li><li>Select model in <code>/models</code> and verify with a test message</li></ol><hr><h2 id="🎒-before-you-start" tabindex="-1">🎒 Before You Start <a class="header-anchor" href="#🎒-before-you-start" aria-label="Permalink to “🎒 Before You Start”">​</a></h2><ul><li>[ ] Completed <a href="./02-install.html">1.2 Installation</a>, able to run <code>opencode</code></li><li>[ ] You have obtained <code>baseURL</code> and <code>API Key</code> from the relay service</li></ul><p>Get two things from the relay service:</p><ol><li><strong>baseURL</strong>: The interface address provided by the relay</li><li><strong>API Key</strong>: Usually in the format <code>k-...</code></li></ol><p>Rules for filling in baseURL (two common formats):</p><ol><li>If given up to <code>/v1</code>, use as-is: e.g., <code>https://url.com/v1</code></li><li>If only domain is given, append <code>/v1</code>: e.g., <code>https://url.com</code> → <code>https://url.com/v1</code></li></ol><blockquote><p>Tip: Many Claude/Anthropic compatible relay message interfaces include <code>.../v1/messages</code> in the path, which you can use to verify if baseURL is missing <code>/v1</code>.</p></blockquote><hr><h2 id="follow-along" tabindex="-1">Follow Along <a class="header-anchor" href="#follow-along" aria-label="Permalink to “Follow Along”">​</a></h2><h3 id="step-1-configure-an-independent-provider-in-opencode-json" tabindex="-1">Step 1: Configure an Independent Provider in opencode.json <a class="header-anchor" href="#step-1-configure-an-independent-provider-in-opencode-json" aria-label="Permalink to “Step 1: Configure an Independent Provider in opencode.json”">​</a></h3><p>Edit <code>~/.config/opencode/opencode.json</code> and add a custom provider (using <code>claudecode-relay</code> as the provider ID here):</p>',20),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "claudecode-relay": {
      "npm": "@ai-sdk/anthropic",
      "options": {
        "baseURL": "https://url.com/v1"
      },
      "models": {
        "claude-opus-4-5-20251101": {
          "name": "Relay's opus 4.5",
          "limit": {
            "context": 200000,
            "output": 64000
          },
          "modalities": {
            "input": ["text", "image"],
            "output": ["text"]
          },
          "options": {
            "thinking": {
              "type": "enabled",
              "budgetTokens": 16000
            }
          }
        }
      }
    }
  }
}`)])],-1),t('<p>Notes:</p><ul><li><code>npm</code> tells OpenCode which &quot;protocol/SDK driver&quot; to use for requests. Claude/Anthropic compatible relays typically use <code>@ai-sdk/anthropic</code>; if you remove this line, OpenCode may treat the provider as OpenAI-compatible by default, causing request failures.</li><li>You can also modify <code>provider.anthropic</code> directly to use the relay; this essentially uses the same Anthropic protocol, but is not recommended (see &quot;Supplementary Notes&quot; at the end).</li><li>The configured key (e.g., <code>claude-opus-4-5-20251101</code>) is <strong>both</strong> the &quot;model ID&quot; you see in OpenCode <strong>and</strong> the model name sent to the relay API</li><li><code>models.&lt;key&gt;.name</code> is the display name, you can write it in any language (e.g., &quot;Relay&#39;s opus 4.5&quot;)</li><li><code>limit.context</code> and <code>limit.output</code> define the model&#39;s context window and maximum output length. <strong>If not configured, defaults to 0, which disables auto-compaction</strong>. Recommended values in the table below.</li></ul><table tabindex="0"><thead><tr><th>Model</th><th>context</th><th>output</th></tr></thead><tbody><tr><td>claude-opus-4-5</td><td>200000</td><td>64000</td></tr><tr><td>claude-sonnet-4-5</td><td>200000</td><td>64000</td></tr></tbody></table><blockquote><p>💡 Want to learn more about context compression and the <code>limit</code> parameter? See <a href="/en/5-advanced/20-compaction.html">5.20 Context Compression</a>.</p></blockquote><h3 id="optional-for-image-input-modalities-must-be-at-model-level" tabindex="-1">Optional: For Image Input, <code>modalities</code> Must Be at Model Level <a class="header-anchor" href="#optional-for-image-input-modalities-must-be-at-model-level" aria-label="Permalink to “Optional: For Image Input, modalities Must Be at Model Level”">​</a></h3><p>If you want the model to receive image input, <code>modalities</code> must be written in <code>models.&lt;modelID&gt;.modalities</code>, not at provider level, and not inside <code>options</code>.</p><p>✅ Correct (will work):</p>',7),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "claudecode-relay": {
      "models": {
        "claude-opus-4-5-20251101": {
          "modalities": {
            "input": ["text", "image"],
            "output": ["text"]
          },
          "options": {
            "thinking": {
              "type": "enabled",
              "budgetTokens": 16000
            }
          }
        }
      }
    }
  }
}`)])],-1),t('<p>❌ Common mistakes:</p><ul><li><code>provider.claudecode-relay.modalities</code> (too shallow, will cause config error)</li><li><code>provider.claudecode-relay.models.&lt;modelID&gt;.options.modalities</code> (too deep, no error but won&#39;t work)</li></ul><hr><h3 id="step-2-configure-api-key-choose-one" tabindex="-1">Step 2: Configure API Key (<strong>Choose One</strong>) <a class="header-anchor" href="#step-2-configure-api-key-choose-one" aria-label="Permalink to “Step 2: Configure API Key (Choose One)”">​</a></h3><p>You only need to choose one of the following methods:</p><h4 id="option-1-write-key-in-opencode-json-simplest" tabindex="-1">Option 1: Write Key in <code>opencode.json</code> (Simplest) <a class="header-anchor" href="#option-1-write-key-in-opencode-json-simplest" aria-label="Permalink to “Option 1: Write Key in opencode.json (Simplest)”">​</a></h4><h5 id="method-a-write-key-directly-fastest" tabindex="-1">Method A: Write Key Directly (Fastest) <a class="header-anchor" href="#method-a-write-key-directly-fastest" aria-label="Permalink to “Method A: Write Key Directly (Fastest)”">​</a></h5>',7),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "claudecode-relay": {
      "options": {
        "baseURL": "https://url.com/v1",
        "apiKey": "your-api-key"
      }
    }
  }
}`)])],-1),e("p",null,"Just paste the key from the relay provider.",-1),e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"Security Note"),e("p",null,"The key will be stored in plain text in the config file. If security is a concern, use Method B.")],-1),e("h5",{id:"method-b-use-environment-variable-more-secure",tabindex:"-1"},[o("Method B: Use Environment Variable (More Secure) "),e("a",{class:"header-anchor",href:"#method-b-use-environment-variable-more-secure","aria-label":"Permalink to “Method B: Use Environment Variable (More Secure)”"},"​")],-1),e("p",null,"If you don't want to store the key in plain text, use an environment variable:",-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "claudecode-relay": {
      "options": {
        "baseURL": "https://url.com/v1",
        "apiKey": "{env:CLAUDECODE_RELAY_API_KEY}"
      }
    }
  }
}`)])],-1),e("p",null,[o("Then add to your shell config file ("),e("code",null,"~/.bashrc"),o(" or "),e("code",null,"~/.zshrc"),o("):")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},'export CLAUDECODE_RELAY_API_KEY="your-api-key"')])],-1),e("p",null,[o("After saving, run "),e("code",null,"source ~/.bashrc"),o(" (or restart terminal) for the environment variable to take effect.")],-1),e("h4",{id:"option-2-store-key-in-opencode-authentication-auth-json",tabindex:"-1"},[o("Option 2: Store Key in OpenCode Authentication ("),e("code",null,"auth.json"),o(") "),e("a",{class:"header-anchor",href:"#option-2-store-key-in-opencode-authentication-auth-json","aria-label":"Permalink to “Option 2: Store Key in OpenCode Authentication (auth.json)”"},"​")],-1),e("p",null,"Run:",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth login")])],-1),e("p",null,"In the interactive interface:",-1),e("ol",null,[e("li",null,[o("Select "),e("code",null,"Other")]),e("li",null,[o("Enter provider ID: "),e("code",null,"claudecode-relay")]),e("li",null,"Paste your API Key")],-1),e("p",null,[o("It will write the key to OpenCode's authentication file "),e("code",null,"auth.json"),o('. You can use the following command to see "where it was actually written" (the path will be shown in the output):')],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth list")])],-1),t('<div class="warning custom-block"><p class="custom-block-title">Important: Don&#39;t Write in Both Places</p><p>To avoid &quot;thinking you changed the key but it didn&#39;t take effect&quot;, keep only one method.</p><ul><li>If you chose Option 1 (<code>opencode.json</code> has <code>options.apiKey</code>), don&#39;t do <code>auth login</code>.</li><li>If you chose Option 2 (store in <code>auth.json</code>), don&#39;t write <code>options.apiKey</code> in <code>opencode.json</code>.</li></ul><p>Reason: When <code>options.apiKey</code> exists in <code>opencode.json</code>, it takes priority.</p></div><hr><h3 id="step-3-select-model-and-verify" tabindex="-1">Step 3: Select Model and Verify <a class="header-anchor" href="#step-3-select-model-and-verify" aria-label="Permalink to “Step 3: Select Model and Verify”">​</a></h3><p>Start OpenCode:</p>',4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode")])],-1),e("p",null,"Enter:",-1),e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},"/models")])],-1),e("p",null,[o("Select "),e("code",null,"claudecode-relay/claude-opus-4-5-20251101"),o(", then send a test message:")],-1),e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},"Hello, please briefly introduce yourself")])],-1),t('<hr><h2 id="checklist-✅" tabindex="-1">Checklist ✅ <a class="header-anchor" href="#checklist-✅" aria-label="Permalink to “Checklist ✅”">​</a></h2><ul><li>[ ] Can see <code>claudecode-relay/...</code> in <code>/models</code> and select it successfully</li><li>[ ] Sending a message receives an AI response</li></ul><hr><h2 id="common-issues" tabindex="-1">Common Issues <a class="header-anchor" href="#common-issues" aria-label="Permalink to “Common Issues”">​</a></h2><table tabindex="0"><thead><tr><th>Symptom</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>404 / Not Found</td><td>Wrong baseURL</td><td>First check if <code>baseURL</code> should be <code>.../v1</code>, and confirm it forms <code>.../v1/messages</code></td></tr><tr><td>401 / Unauthorized</td><td>Invalid/no permission Key</td><td>Regenerate key, or check plan/permissions</td></tr><tr><td>Error when selecting model</td><td>Model name not supported</td><td>Check if configured key (e.g., <code>claude-opus-4-5-20251101</code>) exactly matches the relay&#39;s model name</td></tr><tr><td><code>Unrecognized key: &quot;modalities&quot; provider.xxx</code></td><td><code>modalities</code> at provider level</td><td>Move to <code>provider.xxx.models.&lt;modelID&gt;.modalities</code></td></tr><tr><td><code>this model does not support image input</code></td><td><code>modalities</code> in <code>options</code> or not configured</td><td>Use model level: <code>models.&lt;modelID&gt;.modalities.input</code> includes <code>image</code></td></tr></tbody></table><hr><h2 id="configuring-multiple-relay-providers" tabindex="-1">Configuring Multiple Relay Providers <a class="header-anchor" href="#configuring-multiple-relay-providers" aria-label="Permalink to “Configuring Multiple Relay Providers”">​</a></h2><p>OpenCode supports configuring multiple relay providers simultaneously. You can add multiple independent providers under <code>provider</code>:</p>',9),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "relay-a": {
      "npm": "@ai-sdk/anthropic",
      "options": {
        "baseURL": "https://relay-a.com/v1",
        "apiKey": "your-relay-a-key"
      },
      "models": {
        "claude-opus-4-5-20251101": {
          "name": "Relay A's opus 4.5",
          "limit": {
            "context": 200000,
            "output": 64000
          }
        }
      }
    },
    "relay-b": {
      "npm": "@ai-sdk/anthropic",
      "options": {
        "baseURL": "https://relay-b.com/v1",
        "apiKey": "your-relay-b-key"
      },
      "models": {
        "claude-sonnet-4-5-20250514": {
          "name": "Relay B's sonnet 4.5",
          "limit": {
            "context": 200000,
            "output": 64000
          }
        }
      }
    }
  }
}`)])],-1),t('<p>After configuration, you can see in <code>/models</code>:</p><ul><li><code>relay-a/claude-opus-4-5-20251101</code></li><li><code>relay-b/claude-sonnet-4-5-20250514</code></li></ul><p><strong>Use Cases</strong>:</p><ul><li>Different relays have different prices/speeds, switch as needed</li><li>One relay is down, quickly switch to another</li><li>Test and compare results from different relays</li></ul><hr><h2 id="supplementary-notes-why-not-modify-provider-anthropic-directly" tabindex="-1">Supplementary Notes: Why Not Modify <code>provider.anthropic</code> Directly <a class="header-anchor" href="#supplementary-notes-why-not-modify-provider-anthropic-directly" aria-label="Permalink to “Supplementary Notes: Why Not Modify provider.anthropic Directly”">​</a></h2><p>You can certainly put the relay in <code>provider.anthropic</code>, but it&#39;s not recommended:</p><ul><li>It will also replace your original <code>anthropic</code> config with the relay (not good for switching back to official or comparing/troubleshooting)</li><li>Easier to store the key to the wrong providerID during <code>opencode auth login</code> (e.g., mistakenly storing as <code>anthropic</code>), making troubleshooting more complex</li></ul><p>Using an independent providerID (e.g., <code>claudecode-relay</code> in this chapter) isolates &quot;relay config&quot; from &quot;official anthropic config&quot;.</p><hr><h2 id="next-steps" tabindex="-1">Next Steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to “Next Steps”">​</a></h2><ul><li>Return to <a href="./04-connect.html">1.4 Overview</a> to choose your next path, or proceed to <a href="./../2-daily/01-interface.html">2.1 Interface &amp; Basic Operations</a></li></ul><div class="tip custom-block"><p class="custom-block-title">Having Issues?</p><p>Stuck on relay configuration? <a href="/en/community.html">Join the community</a> and connect with 2000+ fellow learners for real-time Q&amp;A.</p></div>',13)])])}const b=n(s,[["render",r]]);export{g as __pageData,b as default};
