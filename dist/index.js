var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => ChatWidget
});
module.exports = __toCommonJS(index_exports);
var import_react = __toESM(require("react"));

// src/config/api.js
var import_meta = {};
var API_URL = import_meta.env.VITE_API_URL;

// src/index.jsx
function ChatWidget() {
  const [isOpen, setIsOpen] = (0, import_react.useState)(false);
  const [messages, setMessages] = (0, import_react.useState)([
    {
      text: "Hello! How can I help you?",
      bot: true
    }
  ]);
  const [input, setInput] = (0, import_react.useState)("");
  const [loading, setLoading] = (0, import_react.useState)(false);
  const send = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = {
      text: input,
      bot: false
    };
    setMessages((prev) => [...prev, userMessage]);
    const userText = input;
    setInput("");
    setLoading(true);
    try {
      const response = await fetch(
        `${API_URL}/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: userText
          })
        }
      );
      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          text: data.reply,
          bot: true
        }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Server connection failed.",
          bot: true
        }
      ]);
    }
    setLoading(false);
  };
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      style: {
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        fontFamily: "Inter,sans-serif"
      }
    },
    !isOpen ? /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick: () => setIsOpen(true),
        style: {
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          border: "none",
          background: "#111",
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(0,0,0,.4)",
          color: "white",
          fontSize: "30px"
        }
      },
      "\u{1F916}"
    ) : /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        style: {
          width: "min(390px,95vw)",
          height: "min(650px,85vh)",
          background: "#0f0f0f",
          borderRadius: "25px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 20px 60px rgba(0,0,0,.6)"
        }
      },
      /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          style: {
            padding: "20px",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #222"
          }
        },
        /* @__PURE__ */ import_react.default.createElement("div", null, "Assistant"),
        /* @__PURE__ */ import_react.default.createElement(
          "button",
          {
            onClick: () => setIsOpen(
              false
            ),
            style: {
              background: "none",
              border: "none",
              color: "#999",
              cursor: "pointer"
            }
          },
          "\u2715"
        )
      ),
      /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          style: {
            flex: 1,
            overflowY: "auto",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }
        },
        messages.map(
          (m, i) => /* @__PURE__ */ import_react.default.createElement(
            "div",
            {
              key: i,
              style: {
                alignSelf: m.bot ? "flex-start" : "flex-end",
                maxWidth: "80%",
                padding: "14px",
                borderRadius: "16px",
                color: "white",
                background: m.bot ? "#1d1d1d" : "#333"
              }
            },
            m.text
          )
        ),
        loading && /* @__PURE__ */ import_react.default.createElement(
          "div",
          {
            style: {
              color: "#888"
            }
          },
          "typing..."
        )
      ),
      /* @__PURE__ */ import_react.default.createElement(
        "form",
        {
          onSubmit: send,
          style: {
            display: "flex",
            gap: "10px",
            padding: "20px",
            borderTop: "1px solid #222"
          }
        },
        /* @__PURE__ */ import_react.default.createElement(
          "input",
          {
            value: input,
            onChange: (e) => setInput(
              e.target.value
            ),
            placeholder: "Type...",
            style: {
              flex: 1,
              background: "#181818",
              border: "none",
              borderRadius: "15px",
              padding: "14px",
              color: "white",
              outline: "none"
            }
          }
        ),
        /* @__PURE__ */ import_react.default.createElement(
          "button",
          {
            type: "submit",
            style: {
              width: "55px",
              border: "none",
              borderRadius: "15px",
              background: "#333",
              color: "white",
              cursor: "pointer"
            }
          },
          "\u2191"
        )
      )
    )
  );
}
