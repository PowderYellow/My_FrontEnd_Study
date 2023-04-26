const express = require("express");

const app = express();

const STU_ARR = [
  { id: "1", name: "孙悟空", age: 18, gender: "男", address: "花果山" },
  { id: "2", name: "猪八戒", age: 28, gender: "男", address: "高老庄" },
  { id: "3", name: "沙和尚", age: 38, gender: "男", address: "流沙河" },
];

app.use(express.urlencoded({ extended: true }));
// 解析json格式请求体的中间件
app.use(express.json());

// 定义学生信息的路由
app.get("/students", (req, res) => {
  console.log("收到students的get请求");
  // 返回学生信息
  res.send({
    status: "ok",
    data: STU_ARR,
  });
});

// 查询某个学生的路由
app.get("/students/:id", (req, res) => {
  const id = req.params.id;
  const stu = STU_ARR.find((item) => item.id === id);

  res.send({
    status: "ok",
    data: stu,
  });
});

// 定义一个添加学生的路由
app.post("/students", (req, res) => {
  console.log("收到students的post请求", req.body);
  // 获取学生的信息
  const { name, age, gender, address } = req.body;
  // 将学生信息添加到数组

  const stu = {
    id: +STU_ARR.at(-1).id + 1 + "",
    name,
    age: +age,
    gender,
    address,
  };

  STU_ARR.push(stu);

  // 添加成功
  res.send({
    status: "ok",
    data: stu,
  });
});

// 定义一个删除学生的路由 根据id删除学生
app.delete("/students/:id", (req, res) => {
  const id = req.params.id;

  for (let i = 0; i < STU_ARR.length; i++) {
    if (STU_ARR[i].id === id) {
      const delStu = STU_ARR[i];
      STU_ARR.splice(i, 1);
      res.send({
        status: "ok",
        data: delStu,
      });
    }

    res.status(403).send({
      status: "error",
      data: "id does not exist",
    });
  }
});

// 定义一个修改学生的路由
app.put("/students", (req, res) => {
  const { id, name, age, gender, address } = req.body;
  const updateStu = STU_ARR.find((item) => item.id === id);

  if (updateStu) {
    updateStu.name = name;
    updateStu.age = age;
    updateStu.gender = gender;
    updateStu.address = address;
    res.send({
      status: "ok",
      data: updateStu,
    });
  } else {
    res.status(403).send({
      status: "error",
      data: "学生id不存在",
    });
  }
});

app.listen(3000, () => {
  console.log("服务器已经启动！");
});
