# 业务模块，flask和django写法一样
from src.api_shop import Api
from src.api_shop.func import model

class api_login(Api):
    def post(self,request,data=None):
        '''api登陆接口，方便微信用户绑定账户'''
        print(data)
        return {'status': 'success'}


class test(Api):
    def get(self, request, data=None):
        print(data)
        a={'a':2 ,'b':6}
        # return
        # # return 'err',400
        # return {'msg':'你删除了id={}的账号'.format(data.id)}
        return {'msg':'okok'}

    def post(self,request,data=None):
        return {'msg':'你提交了信息','data':data}
