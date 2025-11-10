export interface CodeSnippet {
  language: string;
  code: string;
  label: string;
}

export const generateCodeSnippets = (
  endpoint: string,
  method: "GET" | "POST" = "GET",
  params?: Record<string, string>
): CodeSnippet[] => {
  const apiBase = "https://api.frostfoe.me";

  // JavaScript/TypeScript
  const jsSnippet = generateJavaScript(endpoint, method, params, apiBase);
  
  // Python
  const pySnippet = generatePython(endpoint, method, params, apiBase);
  
  // Go
  const goSnippet = generateGo(endpoint, method, params, apiBase);
  
  // Java
  const javaSnippet = generateJava(endpoint, method, params, apiBase);

  return [jsSnippet, pySnippet, goSnippet, javaSnippet];
};

function generateJavaScript(
  endpoint: string,
  method: string,
  params: Record<string, string> | undefined,
  apiBase: string
): CodeSnippet {
  const url = `${apiBase}${endpoint}`;
  
  if (method === "GET") {
    return {
      language: "javascript",
      label: "JavaScript",
      code: `const API_KEY = 'your-api-key';

fetch('${url}', {
  method: '${method}',
  headers: {
    'Authorization': \`Bearer \${API_KEY}\`,
  },
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`,
    };
  }

  return {
    language: "javascript",
    label: "JavaScript",
    code: `const API_KEY = 'your-api-key';

const body = {
  // প্যারামিটার যোগ করুন
};

fetch('${url}', {
  method: '${method}',
  headers: {
    'Authorization': \`Bearer \${API_KEY}\`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`,
  };
}

function generatePython(
  endpoint: string,
  method: string,
  params: Record<string, string> | undefined,
  apiBase: string
): CodeSnippet {
  const url = `${apiBase}${endpoint}`;

  if (method === "GET") {
    return {
      language: "python",
      label: "Python",
      code: `import requests

API_KEY = 'your-api-key'
url = '${url}'

headers = {
    'Authorization': f'Bearer {API_KEY}'
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Error: {response.status_code}')`,
    };
  }

  return {
    language: "python",
    label: "Python",
    code: `import requests
import json

API_KEY = 'your-api-key'
url = '${url}'

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

data = {
    # প্যারামিটার যোগ করুন
}

response = requests.post(url, headers=headers, json=data)

if response.status_code == 200:
    result = response.json()
    print(result)
else:
    print(f'Error: {response.status_code}')`,
  };
}

function generateGo(
  endpoint: string,
  method: string,
  params: Record<string, string> | undefined,
  apiBase: string
): CodeSnippet {
  const url = `${apiBase}${endpoint}`;

  if (method === "GET") {
    return {
      language: "go",
      label: "Go",
      code: `package main

import (
    "fmt"
    "io"
    "net/http"
)

func main() {
    apiKey := "your-api-key"
    url := "${url}"

    req, _ := http.NewRequest("${method}", url, nil)
    req.Header.Add("Authorization", "Bearer "+apiKey)

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer resp.Body.Close()

    body, _ := io.ReadAll(resp.Body)
    fmt.Println(string(body))
}`,
    };
  }

  return {
    language: "go",
    label: "Go",
    code: `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

func main() {
    apiKey := "your-api-key"
    url := "${url}"

    data := map[string]interface{}{
        // প্যারামিটার যোগ করুন
    }
    jsonData, _ := json.Marshal(data)

    req, _ := http.NewRequest("${method}", url, bytes.NewBuffer(jsonData))
    req.Header.Add("Authorization", "Bearer "+apiKey)
    req.Header.Add("Content-Type", "application/json")

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer resp.Body.Close()

    body, _ := io.ReadAll(resp.Body)
    fmt.Println(string(body))
}`,
  };
}

function generateJava(
  endpoint: string,
  method: string,
  params: Record<string, string> | undefined,
  apiBase: string
): CodeSnippet {
  const url = `${apiBase}${endpoint}`;

  if (method === "GET") {
    return {
      language: "java",
      label: "Java",
      code: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class ApiExample {
    public static void main(String[] args) throws Exception {
        String apiKey = "your-api-key";
        String url = "${url}";

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(new URI(url))
            .header("Authorization", "Bearer " + apiKey)
            .GET()
            .build();

        HttpResponse<String> response = client.send(request,
            HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());
    }
}`,
    };
  }

  return {
    language: "java",
    label: "Java",
    code: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class ApiExample {
    public static void main(String[] args) throws Exception {
        String apiKey = "your-api-key";
        String url = "${url}";
        String jsonBody = "{}"; // JSON ডেটা যোগ করুন

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(new URI(url))
            .header("Authorization", "Bearer " + apiKey)
            .header("Content-Type", "application/json")
            .${method.toLowerCase()}(HttpRequest.BodyPublishers.ofString(jsonBody))
            .build();

        HttpResponse<String> response = client.send(request,
            HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());
    }
}`,
  };
}
