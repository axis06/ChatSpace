#EXPERTカリキュラム
[カリキュラム] (https://tech-camp.in/)

## 開発環境　　
Ruby 2.3.1　　
Rails 5.0.0.1　　
Bundler version 1.13.5　　
　　　　
## データベース設計  

###Users　　
| column | type | null | index |
|---|---|---|---|
| `id`| integer  | false | |
| `email` | string | false |t|
| `name` | string | false | |
| `encrypted_password` | string |  | |
| `remember_created_at` | integer |  | |
| `sign_in_count` | integer |  | |
| `current_sign_in_at` | integer |  | |
| `last_sign_in_at` | datetime |  | |
| `current_sign_in_ip` | string |  | |
| `last_sign_in_ip ` | string |  |
| `created_at` | datetime | false | |
| `updated_at` | datetime | false | |

###Groups  
| column | type | null | index |
|---|---|---|---|
| `id`| integer  | false | |
| `name` | string | false |t|
| `created_at` | datetime | false | |
| `updated_at` | datetime | false | |

###UsersGurops
| column | type | null | index |
|---|---|---|---|
| `id`| integer  | false | |
| `user_id` | integer | false |t|
| `group_id` | integer | false |t|
| `created_at` | datetime | false | |
| `updated_at` | datetime | false | |

###Messages  
| column | type | null | index |
|---|---|---|---|
| `id`| integer  | false | |
| `image` | string | false ||
| `user_id` | integer | false |t|
| `group_id` | integer | false |t|
| `created_at` | datetime | false | |
| `updated_at` | datetime | false | |

