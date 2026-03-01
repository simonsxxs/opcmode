import{_ as a,c as r,o as d,a5 as o,j as e,a as t}from"./chunks/framework.Dtwt352Q.js";const u=JSON.parse('{"title":"5.21 思考深度配置","description":"学会用 opencode.json 为单个模型设定思考预算，并用 Ctrl+T 快捷键在不同深度间切换。","frontmatter":{"title":"5.21 思考深度配置","subtitle":"给大模型单独设定思考预算","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.21","duration":"18 分钟","practice":"12 分钟","level":"进阶","description":"学会用 opencode.json 为单个模型设定思考预算，并用 Ctrl+T 快捷键在不同深度间切换。","tags":["配置","模型","思考","快捷键"],"prerequisite":["5.1 配置全解"]},"headers":[],"relativePath":"5-advanced/21-thinking-depth.md","filePath":"5-advanced/21-thinking-depth.md","lastUpdated":1772014034000}'),l={name:"5-advanced/21-thinking-depth.md"};function i(c,n,s,p,h,g){return d(),r("div",null,[...n[0]||(n[0]=[o('<h1 id="_5-21-思考深度配置" tabindex="-1">5.21 思考深度配置 <a class="header-anchor" href="#_5-21-思考深度配置" aria-label="Permalink to “5.21 思考深度配置”">​</a></h1><blockquote><p>把“思考深度”当成挡位：想快就浅，想稳就深。</p></blockquote><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>给某个模型单独设置思考预算（thinking budget）</li><li>理解“变体”机制如何控制思考深度</li><li>使用 <kbd>Ctrl</kbd>+<kbd>T</kbd> 在不同思考深度间切换</li></ul><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><ul><li>同一个模型，有时想快、有时想深，但不知道怎么切</li><li>配置写进 <code>opencode.json</code> 后，不确定有没有生效</li><li>用中转站模型时，不确定是否还能控制思考深度</li></ul><hr><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to “什么时候用这一招”">​</a></h2><ul><li>当你需要：把“思考深度”做成可切换的档位</li><li>而且不想：每次换模型或改配置</li></ul><hr><h2 id="🎒-开始前的准备" tabindex="-1">🎒 开始前的准备 <a class="header-anchor" href="#🎒-开始前的准备" aria-label="Permalink to “🎒 开始前的准备”">​</a></h2><ul><li>[ ] 完成了 <a href="./01a-config-basics.html">5.1 配置全解</a></li><li>[ ] 已能正常启动 OpenCode</li></ul><hr><h2 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to “核心思路”">​</a></h2><ol><li>OpenCode 用 <strong>模型变体（variants）</strong> 保存不同思考深度</li><li>变体是模型级配置，优先级高于默认值</li><li><kbd>Ctrl</kbd>+<kbd>T</kbd> 会在变体之间循环切换</li></ol><div class="info custom-block"><p class="custom-block-title">ℹ️ 什么是“思考深度”？</p><p>它指的是模型的“可用思考预算”，例如 Anthropic 的 <code>thinking.budgetTokens</code>。 数值越大，模型可用于推理的 token 越多，但响应更慢、成本更高。</p></div><hr><h2 id="跟我做" tabindex="-1">跟我做 <a class="header-anchor" href="#跟我做" aria-label="Permalink to “跟我做”">​</a></h2><h3 id="第-1-步-确认模型是否支持思考变体" tabindex="-1">第 1 步：确认模型是否支持思考变体 <a class="header-anchor" href="#第-1-步-确认模型是否支持思考变体" aria-label="Permalink to “第 1 步：确认模型是否支持思考变体”">​</a></h3><p><strong>为什么</strong> 不是所有模型都有变体，OpenCode 会先检查 <code>capabilities.reasoning</code>。</p><p><strong>怎么做</strong> 选用支持 reasoning 的模型（如 Anthropic / Gemini 3 / OpenAI）。</p><p><strong>你应该看到</strong> 模型列表中能出现 <code>high</code> / <code>max</code> 等变体。</p><hr><h3 id="第-2-步-在-opencode-json-里为单个模型设置思考预算" tabindex="-1">第 2 步：在 opencode.json 里为单个模型设置思考预算 <a class="header-anchor" href="#第-2-步-在-opencode-json-里为单个模型设置思考预算" aria-label="Permalink to “第 2 步：在 opencode.json 里为单个模型设置思考预算”">​</a></h3><p><strong>为什么</strong> 变体配置在 <code>provider.models.[modelID].variants</code> 下，可以覆盖默认值。</p><p><strong>怎么做</strong> 按你使用的 Provider 填入对应字段：</p><p><strong>Anthropic 示例</strong>（thinking.budgetTokens）</p>',28),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1),e("p",null,[e("strong",null,"Gemini 3 示例"),t("（thinkingConfig.thinkingBudget）")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1),o('<p><strong>你应该看到</strong> 重启后模型变体的数值生效。</p><hr><h3 id="第-3-步-用-ctrl-t-在思考深度间切换" tabindex="-1">第 3 步：用 Ctrl+T 在思考深度间切换 <a class="header-anchor" href="#第-3-步-用-ctrl-t-在思考深度间切换" aria-label="Permalink to “第 3 步：用 Ctrl+T 在思考深度间切换”">​</a></h3><p><strong>为什么</strong> 变体配置写好后，用快捷键快速切换更顺手。</p><p><strong>怎么做</strong> 在对话输入框按 <kbd>Ctrl</kbd>+<kbd>T</kbd> 循环切换：</p>',5),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"(无) → high → max → (无) → high → ...")])],-1),o('<p><strong>你应该看到</strong> 状态栏显示当前变体名称（例如 <code>high</code>）。</p><hr><h3 id="第-4-步-自定义变体名字-可选" tabindex="-1">第 4 步：自定义变体名字（可选） <a class="header-anchor" href="#第-4-步-自定义变体名字-可选" aria-label="Permalink to “第 4 步：自定义变体名字（可选）”">​</a></h3><p><strong>为什么</strong> 变体名称不是固定的，你可以改成“深度思考/极速”等。</p><p><strong>怎么做</strong> 在 <code>variants</code> 里使用自定义 key：</p>',5),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "anthropic": {
      "models": {
        "claude-sonnet-4-5": {
          "variants": {
            "极速": { "thinking": { "type": "enabled", "budgetTokens": 8000 } },
            "深度": { "thinking": { "type": "enabled", "budgetTokens": 32000 } }
          }
        }
      }
    }
  }
}`)])],-1),e("p",null,[e("strong",null,"你应该看到"),t(),e("kbd",null,"Ctrl"),t("+"),e("kbd",null,"T"),t(" 在“极速/深度”之间切换。")],-1),e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"ℹ️ 自定义变体是“增加”，不是“替换”"),e("p",null,[t("OpenCode 会把你在 "),e("code",null,"opencode.json"),t(" 里写的变体"),e("strong",null,"合并"),t("到默认变体中。 如果你只想保留自定义的变体，把默认的 "),e("code",null,"high"),t("/"),e("code",null,"max"),t(" 显式禁用即可：")]),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "anthropic": {
      "models": {
        "claude-sonnet-4-5": {
          "variants": {
            "high": { "disabled": true },
            "max": { "disabled": true },
            "极速": { "thinking": { "type": "enabled", "budgetTokens": 8000 } },
            "深度": { "thinking": { "type": "enabled", "budgetTokens": 32000 } }
          }
        }
      }
    }
  }
}`)])])],-1),e("p",null,[e("strong",null,"第三方中转站怎么配")],-1),e("p",null,[t("如果你的中转站是 "),e("code",null,"openai-compatible"),t("，默认使用 "),e("code",null,"reasoningEffort"),t("。示例：")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1),e("p",null,[t("如果中转站其实转发的是 Anthropic 接口（仍走 "),e("code",null,"openai-compatible"),t(" SDK），可以直接写 Anthropic 字段覆盖：")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1),o('<p>前提是：你的中转站服务端会把 <code>thinking</code> 字段原样转发到 Anthropic。</p><hr><h2 id="检查点-✅" tabindex="-1">检查点 ✅ <a class="header-anchor" href="#检查点-✅" aria-label="Permalink to “检查点 ✅”">​</a></h2><ul><li>[ ] <code>opencode.json</code> 中包含 <code>provider.models.[modelID].variants</code></li><li>[ ] 启动后可看到变体名称显示在状态栏</li><li>[ ] <kbd>Ctrl</kbd>+<kbd>T</kbd> 能轮换变体</li></ul><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>按 <kbd>Ctrl</kbd>+<kbd>T</kbd> 没反应</td><td>当前模型没有变体</td><td>换支持 reasoning 的模型或添加 variants</td></tr><tr><td>变体有但不显示</td><td>还未切换到某个变体</td><td>按一次 <kbd>Ctrl</kbd>+<kbd>T</kbd></td></tr><tr><td>配置不生效</td><td>模型 ID 写错</td><td>从模型列表复制完整 ID</td></tr><tr><td>中转站没变化</td><td>用的是 <code>openai-compatible</code>，只支持 reasoningEffort</td><td>在 variants 里手动覆盖参数</td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li>变体是“思考深度档位”，在 <code>provider.models.[modelID].variants</code> 配置</li><li>默认变体由 ProviderTransform 自动生成，可被配置覆盖</li><li><kbd>Ctrl</kbd>+<kbd>T</kbd> 用于循环切换变体</li></ol><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们学习 <strong><a href="./22-debugging.html">调试与诊断工具</a></strong>。</p><p>你会学到：</p><ul><li>如何使用 <code>opencode debug</code> 系列命令</li><li>诊断 LSP、配置和搜索问题</li><li>像开发者一样剖析 OpenCode</li></ul></blockquote><hr><h2 id="附录-源码参考" tabindex="-1">附录：源码参考 <a class="header-anchor" href="#附录-源码参考" aria-label="Permalink to “附录：源码参考”">​</a></h2><details><summary><strong>点击展开查看源码位置</strong></summary><blockquote><p>更新时间：2026-01-16</p></blockquote><table tabindex="0"><thead><tr><th>功能</th><th>文件路径</th><th>行号</th></tr></thead><tbody><tr><td>变体生成入口</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/provider/transform.ts#L297-L477" target="_blank" rel="noreferrer"><code>src/provider/transform.ts</code></a></td><td>297-477</td></tr><tr><td>reasoning 过滤与排除</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/provider/transform.ts#L298-L301" target="_blank" rel="noreferrer"><code>src/provider/transform.ts</code></a></td><td>298-301</td></tr><tr><td>Anthropic 思考预算默认值</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/provider/transform.ts#L371-L385" target="_blank" rel="noreferrer"><code>src/provider/transform.ts</code></a></td><td>371-385</td></tr><tr><td>Gemini 3 思考预算默认值</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/provider/transform.ts#L421-L439" target="_blank" rel="noreferrer"><code>src/provider/transform.ts</code></a></td><td>421-439</td></tr><tr><td>变体配置 Schema</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts#L818-L833" target="_blank" rel="noreferrer"><code>src/config/config.ts</code></a></td><td>818-833</td></tr><tr><td>变体配置合并</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/provider/provider.ts#L929-L936" target="_blank" rel="noreferrer"><code>src/provider/provider.ts</code></a></td><td>929-936</td></tr><tr><td>Ctrl+T 默认快捷键</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts#L632-L688" target="_blank" rel="noreferrer"><code>src/config/config.ts</code></a></td><td>632-688</td></tr><tr><td>Ctrl+T 命令绑定</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/cli/cmd/tui/app.tsx#L393-L399" target="_blank" rel="noreferrer"><code>src/cli/cmd/tui/app.tsx</code></a></td><td>393-399</td></tr><tr><td>变体循环逻辑</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/cli/cmd/tui/context/local.tsx#L310-L346" target="_blank" rel="noreferrer"><code>src/cli/cmd/tui/context/local.tsx</code></a></td><td>310-346</td></tr><tr><td>变体显示逻辑</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/cli/cmd/tui/component/prompt/index.tsx#L696-L700" target="_blank" rel="noreferrer"><code>src/cli/cmd/tui/component/prompt/index.tsx</code></a></td><td>696-700</td></tr><tr><td>变体名称渲染</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/cli/cmd/tui/component/prompt/index.tsx#L946-L950" target="_blank" rel="noreferrer"><code>src/cli/cmd/tui/component/prompt/index.tsx</code></a></td><td>946-950</td></tr><tr><td>变体应用到 LLM 参数</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/session/llm.ts#L96-L109" target="_blank" rel="noreferrer"><code>src/session/llm.ts</code></a></td><td>96-109</td></tr><tr><td>变体 keybind 配置</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts#L632-L688" target="_blank" rel="noreferrer"><code>src/config/config.ts</code></a></td><td>632-688</td></tr></tbody></table><p><strong>关键常量</strong>：</p><ul><li><code>WIDELY_SUPPORTED_EFFORTS = [&quot;low&quot;, &quot;medium&quot;, &quot;high&quot;]</code></li><li><code>OPENAI_EFFORTS = [&quot;none&quot;, &quot;minimal&quot;, &quot;low&quot;, &quot;medium&quot;, &quot;high&quot;, &quot;xhigh&quot;]</code></li></ul></details>',17)])])}const m=a(l,[["render",i]]);export{u as __pageData,m as default};
